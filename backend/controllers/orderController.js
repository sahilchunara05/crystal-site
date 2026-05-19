import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

export const createOrder = catchAsync(async (req, res, next) => {
  const { shippingAddress, paymentMethod } = req.body;

  // 1) Get user's cart
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');

  if (!cart || cart.items.length === 0) {
    return next(new AppError('Your cart is empty', 400));
  }

  // 2) Map cart items to order items
  const orderItems = cart.items.map(item => {
    return {
      product: item.product._id,
      name: item.product.name,
      quantity: item.quantity,
      price: item.price,
      image: item.product.imageCover
    };
  });

  // 3) Calculate prices (tax, shipping, total)
  const itemsPrice = cart.totalPrice;
  const taxPrice = itemsPrice * 0.18; // 18% GST example
  const shippingPrice = itemsPrice > 5000 ? 0 : 150; // Free shipping above 5000
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  // 4) Create order
  const order = await Order.create({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice
  });

  // 5) Clear user's cart (optional: wait until payment is successful)
  // cart.items = [];
  // cart.totalPrice = 0;
  // await cart.save();

  res.status(201).json({
    status: 'success',
    data: {
      order,
    },
  });
});

export const getOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (!order) {
    return next(new AppError('Order not found', 404));
  }

  // Ensure user owns this order or is admin
  if (order.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
     return next(new AppError('You do not have permission to view this order', 403));
  }

  res.status(200).json({
    status: 'success',
    data: {
      order,
    },
  });
});

export const getMyOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id }).sort('-createdAt');

  res.status(200).json({
    status: 'success',
    results: orders.length,
    data: {
      orders,
    },
  });
});

export const updateOrderStatus = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new AppError('Order not found', 404));
  }

  order.status = req.body.status || order.status;
  order.isDelivered = req.body.status === 'Delivered' ? true : order.isDelivered;
  
  if (req.body.status === 'Delivered' && !order.deliveredAt) {
    order.deliveredAt = Date.now();
  }

  await order.save();

  res.status(200).json({
    status: 'success',
    data: {
      order,
    },
  });
});
