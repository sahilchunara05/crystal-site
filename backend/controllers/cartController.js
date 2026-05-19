import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

export const getCart = catchAsync(async (req, res, next) => {
  let cart = await Cart.findOne({ user: req.user._id }).populate('items.product', 'name price imageCover');

  if (!cart) {
    cart = await Cart.create({ user: req.user._id, items: [], totalPrice: 0 });
  }

  res.status(200).json({
    status: 'success',
    data: {
      cart,
    },
  });
});

export const addToCart = catchAsync(async (req, res, next) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return next(new AppError('Product not found', 404));
  }

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = await Cart.create({ user: req.user._id, items: [], totalPrice: 0 });
  }

  const itemIndex = cart.items.findIndex(p => p.product.toString() === productId);

  if (itemIndex > -1) {
    // Product exists in cart, update quantity
    cart.items[itemIndex].quantity += quantity;
  } else {
    // Product does not exist, push to items array
    cart.items.push({ product: productId, quantity, price: product.price });
  }

  await cart.save();
  await cart.populate('items.product', 'name price imageCover');

  res.status(200).json({
    status: 'success',
    data: {
      cart,
    },
  });
});

export const removeFromCart = catchAsync(async (req, res, next) => {
  const productId = req.params.productId;

  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    return next(new AppError('Cart not found', 404));
  }

  cart.items = cart.items.filter(item => item.product.toString() !== productId);
  await cart.save();

  res.status(200).json({
    status: 'success',
    data: {
      cart,
    },
  });
});

export const clearCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
});
