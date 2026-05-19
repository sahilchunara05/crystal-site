import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

let redisClient;

const connectRedis = async () => {
  if (process.env.REDIS_URL) {
    redisClient = createClient({
      url: process.env.REDIS_URL
    });

    redisClient.on('error', (err) => console.log('Redis Client Error', err));
    redisClient.on('connect', () => console.log('Redis Client Connected'));

    await redisClient.connect();
  } else {
    console.log('Redis URL not provided. Caching disabled.');
  }
};

export { redisClient, connectRedis };
