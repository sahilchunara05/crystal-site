import express from 'express';
import * as paymentController from '../controllers/paymentController.js';
import { protect } from '../controllers/authController.js';

const router = express.Router();

router.use(protect);

router.post('/create-order/:orderId', paymentController.createRazorpayOrder);
router.post('/verify', paymentController.verifyPayment);

export default router;
