import express from 'express';
import * as cartController from '../controllers/cartController.js';
import { protect } from '../controllers/authController.js';

const router = express.Router();

// All cart routes are protected
router.use(protect);

router
  .route('/')
  .get(cartController.getCart)
  .post(cartController.addToCart)
  .delete(cartController.clearCart);

router.delete('/:productId', cartController.removeFromCart);

export default router;
