const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});

const upload = multer({
    storage: storage,
});

router.post('/add', upload.single('productImage'), productController.addProduct);
router.put('/update/:id', upload.single('productImage'), productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);
router.get('/', productController.getProducts);

module.exports = router;
