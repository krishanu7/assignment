const Product = require("../models/product.js");
const Variant = require("../models/variant.js");
const Size = require("../models/size.js");
const Discount = require("../models/discount.js");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected successfully`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const productsData = [
  { name: "Shirt", price: 500 },
  { name: "T-Shirt", price: 450 },
  { name: "Hoodie", price: 1000 },
];

const variantsData = [
  { name: "V Neck", products: ['65eaa983a91e9e3b8ff7317f', '65eaa983a91e9e3b8ff73180'] },
  { name: "Crew Neck", products: ['65eaa983a91e9e3b8ff73181'] },
];

const sizesData = [
  { name: "S", variants: ['65eaaa5b9457fd5d9c6285ab','65eaaa5b9457fd5d9c6285ac'], discount: '65eaaaa071b38443dcf991a9' },
  { name: "M", variants: ['65eaaa5b9457fd5d9c6285ab'], discount: '65eaaaa071b38443dcf991aa' },
  { name: "L", variants: ['65eaaa5b9457fd5d9c6285ab'], discount: '65eaaaa071b38443dcf991ab' },
  { name: "XL", variants: ['65eaaa5b9457fd5d9c6285ac'], discount: '65eaaaa071b38443dcf991ac' },
];

const discountsData = [
  { discount: 10 },
  { discount: 15 },
  { discount: 20 },
  { discount: 25 },
];


// Function to insert dummy data
async function insertDummyData() {
  try {
    //await Product.insertMany(productsData);
    //await Variant.insertMany(variantsData);
    //await Size.insertMany(sizesData);
    //await Discount.insertMany(discountsData);
    //await Product.deleteMany({});
    console.log("Dummy data inserted successfully");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  }
}
//insertDummyData();

module.exports = connectDB;
