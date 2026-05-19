import express from 'express';
import * as orderController from '../controllers/orderController.js';
import { protect, restrictTo } from '../controllers/authController.js';

const router = express.Router();

router.use(protect);

router
  .route('/')
  .post(orderController.createOrder);

router.get('/myorders', orderController.getMyOrders);

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(restrictTo('admin'), orderController.updateOrderStatus);

export default router;
