const productModel = require('../models/productModel');
const path = require("path");
const multer = require("multer");
const fs = require("fs");

exports.addProduct = async (req, res) => {
    try {
        const { category, productName, packSize, mrp, status } = req.body;
        let productImage;
        if (req.file) {
            productImage = `https://apv2.onrender.com/api/${req.file.filename}`;
        } else {
            productImage = '';
        }
        const newProduct = new productModel({ category, productName, packSize, mrp, productImage, status });
        await newProduct.save();
        res.status(201).send({ message: 'Product added successfully', newProduct });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { category, productName, packSize, mrp, status } = req.body;
        let productImage;

        const existingProduct = await productModel.findById(productId);

        productImage = req.file ? `https://apv2.onrender.com/api/${req.file.filename}` : existingProduct.productImage;

        const updatedCategory = category || existingProduct.category;

        const updatedProductName = productName || existingProduct.productName;

        const updatedPackSize = packSize || existingProduct.packSize;

        const updatedMrp = mrp || existingProduct.mrp;

        const updatedStatus = status || existingProduct.status;

        const updatedProduct = await productModel.findByIdAndUpdate(
            productId,
            { category: updatedCategory, productName: updatedProductName, packSize: updatedPackSize, mrp: updatedMrp, productImage, status: updatedStatus },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }

        res.status(200).send({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await productModel.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.status(200).send({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {

        const { searchTerm, page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;
        let categories;

        if (searchTerm) {
            categories = await productModel.find({
                $or: [
                    { category: { $regex: searchTerm, $options: 'i' } },
                    { productName: { $regex: searchTerm, $options: 'i' } }
                ]
            })
                .skip(skip)
                .limit(parseInt(limit));

        } else {
            categories = await productModel.find()
                .skip(skip)
                .limit(parseInt(limit));
        }

        res.status(200).send({status:true, data:categories });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
