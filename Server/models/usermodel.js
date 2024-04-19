const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
},
  { timestamps: true }

)

const userModel = mongoose.model("myuser", userSchema)


module.exports = userModel