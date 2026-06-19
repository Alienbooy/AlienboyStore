const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const upload = require('../middlewares/upload');
const { verifyToken, isAdmin } = require('../middlewares/auth');

// Rutas Públicas
router.get('/', productController.getAllProducts);
router.get('/:slug', productController.getProductBySlug);

// Rutas Protegidas (Solo Admin)
router.post('/', verifyToken, isAdmin, upload.single('image'), productController.createProduct);
router.put('/:id', verifyToken, isAdmin, upload.single('image'), productController.updateProduct);
router.delete('/:id', verifyToken, isAdmin, productController.deleteProduct);

module.exports = router;
