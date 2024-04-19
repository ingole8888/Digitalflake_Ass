const categoryModel = require('../models/categoryModel');

exports.addCategory = async (req, res) => {
    try {
        const { categoryName, description, status } = req.body;
        const existingCategory = await categoryModel.findOne({ categoryName });
        if (existingCategory) {
            return res.status(400).send({ message: 'Category already exists' });
        }
        console.log(existingCategory)

        const newCategory = new categoryModel({ categoryName, description, status });
        await newCategory.save();
        res.status(201).send({ message: 'Category added successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const { categoryName, description, status } = req.body;
        const updatedCategory = await categoryModel.findByIdAndUpdate(
            categoryId,
            { categoryName, description, status },
            { new: true }
        );
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category updated successfully', category: updatedCategory });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const deletedCategory = await categoryModel.findByIdAndDelete(categoryId);
        if (!deletedCategory) {
            return res.status(404).send({ message: 'Category not found' });
        }
        res.status(200).send({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const { searchTerm, page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;
        let categories;

        if (searchTerm) {
            categories = await categoryModel.find({
                $or: [
                    { categoryName: { $regex: searchTerm, $options: 'i' } },
                    { description: { $regex: searchTerm, $options: 'i' } }
                ]
            })
                .skip(skip)
                .limit(parseInt(limit));

        } else {
            categories = await categoryModel.find()
                .skip(skip)
                .limit(parseInt(limit));
        }

        res.status(200).send({status:true, data:categories });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
