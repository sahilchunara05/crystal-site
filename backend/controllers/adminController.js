import Order from '../models/Order.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import catchAsync from '../utils/catchAsync.js';

export const getDashboardStats = catchAsync(async (req, res, next) => {
  const totalOrders = await Order.countDocuments();
  const totalUsers = await User.countDocuments({ role: 'user' });
  const totalProducts = await Product.countDocuments();

  const totalSalesQuery = await Order.aggregate([
    { $match: { isPaid: true } },
    { $group: { _id: null, totalSales: { $sum: '$totalPrice' } } }
  ]);

  const totalSales = totalSalesQuery.length > 0 ? totalSalesQuery[0].totalSales : 0;

  // Recent Orders
  const recentOrders = await Order.find().sort('-createdAt').limit(5).populate('user', 'name');

  res.status(200).json({
    status: 'success',
    data: {
      stats: {
        totalOrders,
        totalUsers,
        totalProducts,
        totalSales,
      },
      recentOrders,
    },
  });
});
