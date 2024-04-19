const mongoose = require("mongoose")

const categotySchema = new mongoose.Schema({
  categoryName: { type: String, unique: true },
  description: { type: String },
  status: { type: String },
},
  { timestamps: true }

)

const categotyModel = mongoose.model("categoty", categotySchema)


module.exports = categotyModel