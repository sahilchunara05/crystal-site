import crypto from 'crypto';
import razorpay from '../config/razorpay.js';
import Order from '../models/Order.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

export const createRazorpayOrder = catchAsync(async (req, res, next) => {
  const orderId = req.params.orderId;
  const order = await Order.findById(orderId);

  if (!order) {
    return next(new AppError('Order not found', 404));
  }

  const options = {
    amount: Math.round(order.totalPrice * 100), // amount in the smallest currency unit (paise)
    currency: 'INR',
    receipt: order._id.toString(),
  };

  const razorpayOrder = await razorpay.orders.create(options);

  res.status(200).json({
    status: 'success',
    data: {
      id: razorpayOrder.id,
      currency: razorpayOrder.currency,
      amount: razorpayOrder.amount,
    },
  });
});

export const verifyPayment = catchAsync(async (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;

  const body = razorpay_order_id + '|' + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Payment is successful
    const order = await Order.findById(orderId);
    
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: razorpay_payment_id,
      status: 'success',
      update_time: new Date().toISOString(),
      email_address: req.user.email,
    };

    await order.save();

    // Ideally, clear user's cart here
    res.status(200).json({
      status: 'success',
      message: 'Payment verified successfully',
    });
  } else {
    return next(new AppError('Payment verification failed', 400));
  }
});
