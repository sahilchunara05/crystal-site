import express from 'express';
import * as adminController from '../controllers/adminController.js';
import { protect, restrictTo } from '../controllers/authController.js';

const router = express.Router();

router.use(protect, restrictTo('admin'));

router.get('/dashboard', adminController.getDashboardStats);

export default router;
