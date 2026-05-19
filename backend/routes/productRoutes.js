import express from 'express';
import * as productController from '../controllers/productController.js';
import { protect, restrictTo } from '../controllers/authController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router
  .route('/')
  .get(productController.getAllProducts)
  .post(
    protect,
    restrictTo('admin'),
    upload.fields([
      { name: 'imageCover', maxCount: 1 },
      { name: 'images', maxCount: 5 },
    ]),
    productController.createProduct
  );

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(
    protect,
    restrictTo('admin'),
    upload.fields([
      { name: 'imageCover', maxCount: 1 },
      { name: 'images', maxCount: 5 },
    ]),
    productController.updateProduct
  )
  .delete(protect, restrictTo('admin'), productController.deleteProduct);

export default router;
