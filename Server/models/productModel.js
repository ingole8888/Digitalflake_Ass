const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  category: { type: String },
  productName: { type: String },
  packSize: { type: String },
  mrp: { type: String },
  productImage: { type: String },
  status: { type: String },
},
  { timestamps: true }

)

const productModel = mongoose.model("product", productSchema)


module.exports = productModel