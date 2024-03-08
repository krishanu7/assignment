const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 8080;
const dotenv = require("dotenv");
const productRoute = require("./routes/productRoute.js");
const order = require("./routes/orderRoute.js");

dotenv.config();
app.use(express.json());
app.use("/products", productRoute);
app.use("/orders", order);
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Running on PORT ${PORT}`);
});
