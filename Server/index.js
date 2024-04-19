const express = require("express");
const cors = require("cors");
const connection = require("./config/config");

const authController = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

const { verify } = require("./middlewares/Verify");

require("dotenv").config();
const app = express();
app.use("/api", express.static("public/uploads"));
app.use(express.json());
app.use(
  cors({
    origin: "*", // Change this to your specific origin in production
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: "Content-Type, Authorization,enctype",
  })
);

app.use("/user", authController);
app.use('/category',  categoryRoutes);
app.use("/product",  productRoutes);

app.get("/", (req, res) => {
  return res.status(200).send("HomePage");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
  console.log(`db connect at ${process.env.PORT}`);
});
