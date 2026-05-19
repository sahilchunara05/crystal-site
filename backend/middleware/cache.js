import { redisClient } from '../config/redis.js';

export const cacheMiddleware = (keyPrefix, expiration = 3600) => {
  return async (req, res, next) => {
    if (!redisClient) {
      return next();
    }

    const key = `${keyPrefix}:${req.originalUrl}`;
    
    try {
      const data = await redisClient.get(key);
      if (data) {
        return res.status(200).json(JSON.parse(data));
      }
      
      // If not in cache, override res.json to cache the response before sending
      const originalJson = res.json;
      res.json = function (body) {
        // Cache the response
        redisClient.setEx(key, expiration, JSON.stringify(body));
        // Call the original res.json
        originalJson.call(this, body);
      };
      
      next();
    } catch (err) {
      console.error('Redis Cache Error:', err);
      next();
    }
  };
};
