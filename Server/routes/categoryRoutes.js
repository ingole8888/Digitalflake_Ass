const express = require('express');
const categoryController = require('../controller/categoryController');
const router = express.Router();

router.post('/add', categoryController.addCategory);
router.put('/update/:id', categoryController.updateCategory);
router.delete('/delete/:id', categoryController.deleteCategory);
router.get('/', categoryController.getCategories);

module.exports = router;
