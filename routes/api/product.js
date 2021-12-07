const express = require("express");
const { auth, merchant } = require("../../middleware/auth");
const Store = require("../../models/Store");
const Product = require("../..//models/Product");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Categories = require("../../models/Categories");

const router = express.Router();

//add product
// @post request
// end point :  /api/product/create

router.post(
  "/create",
  [
    auth,
    merchant,
    [
      check("title", "Title is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("actual_price", "Price is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, actual_price, discount, store_name, category_name, product_image } = req.body;
    try {
      let findStore = await Store.findOne({ name: store_name });
      let findCategory = await Categories.findOne({ name: category_name})

      if (!findStore) {
        return res.status(404).json({ errors: [{ msg: "Store not found" }] });
      }
      else if(!findCategory){
        return res.status(404).json({ errors: [{ msg: "Category not found" }] });
      }
      else {
      let discount_percentage_value = discount / 100;
      let discounted_price =
        actual_price - actual_price * discount_percentage_value;

      let product = new Product({
        title,
        description,
        actual_price,
        discount,
        discounted_price,
        store_id: findStore._id,
        category_id: findCategory._id,
        category_name, 
        store_name,
        product_image,
        merchant_id: req.user.id,
      });

      await product.save();

      res.json(product);
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

//get products against store
// @get request
// end point :  /api/product/get_products/store_id

router.get("/get_products/:store_id", async (req, res) => {
  try {
    const { searchProduct } = req.query;
    const searchPattern = new RegExp(".*" + searchProduct + ".*", "i");
    if (searchProduct) {
      const products = await Product.find({
        title: searchPattern,
        store_id: req.params.store_id,
      });
      if (products.length === 0) {
        return res.status(404).json({ msg: "No results found" });
      }
      return res.status(200).json(products);
    }
    const products = await Product.find({ store_id: req.params.store_id });
    if (products.length === 0) {
      return res.status(404).json({ msg: "This store has no products" });
    }
    return res.json(products);
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(404).json({ msg: "Store not found" });
    }
    res.status(500).json({ msg: "Server Error" });
  }
});

//get All Products
// @get request
// end point :  /api/product/get-all

router.get("/get_all", async (req, res) => {
  try {
    const { searchProduct } = req.query;
    const searchPattern = new RegExp(".*" + searchProduct + ".*", "i");
    if (searchProduct) {
      const products = await Product.find({
        title: searchPattern,
      });
      if (products.length === 0) {
        return res.status(404).json({ msg: "No results found" });
      }
      return res.status(200).json(products);
    }
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ msg: "No Products available" });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.msg });
  }
});

//get single product
// @get request
// end point :  /api/product/get-single/:id

router.get("/get-single/:product_id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.product_id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    return res.json(product);
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(500).json({ msg: "Server Error", erorr: error.message });
  }
});

//delete single product
// @delete request
// end point :  /api/product/delete-single/:product_id

router.delete("/delete-single/:product_id", auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.product_id);
    if (product.merchant_id.toString() !== req.user.id) {
      return res.json({ msg: "User is not authorized to delete this" });
    }
    await product.remove();
    return res.status(200).json({ msg: "Product deleted successfully" });
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(500).json({ msg: "Server Error", erorr: error.message });
  }
});

//update product
// @put request
// end point :  /api/product/:product_id/update

router.put(
  "/:product_id/update",
  [
    auth,
    merchant,
    [
      check("title", "Title is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("actual_price", "Price is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, actual_price, discount, store_name, category_name, product_image } = req.body;
    try {
      let findStore = await Store.findOne({ store_name });
      let store_id = findStore._id;
      let findCategory = await Categories.findOne({ name: category_name})

      if (!findStore) {
        return res.status(404).json({ errors: [{ msg: "Store not found" }] });
      }
      else if(!findCategory){
        return res.status(404).json({ errors: [{ msg: "Category not found" }] });
      }
      else {
      let discount_percentage_value = discount / 100;
      let discounted_price =
        actual_price - actual_price * discount_percentage_value;

      let product = await Product.findById(req.params.product_id);
      product.title = title,
      product.description = description,
      product.actual_price = actual_price,
      product.discounted_price = discounted_price,
      product.store_name = store_name;
      product.store_id = store_id;
      product.category_name = category_name;
      product.category_id = findCategory._id;
      product.discount = discount;
      product.product_image = product_image;

      await product.save();

      res.json({ msg: "product updated successfully", product});
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

//get your products
// @get request
// end point :  /api/product/your-product

router.get("/your-product",auth, async (req, res) => {
  try {
    const { searchProduct } = req.query;
    const searchPattern = new RegExp(".*" + searchProduct + ".*", "i");
    if (searchProduct) {
      const products = await Product.find({
        title: searchPattern,
        merchant_id: req.user.id,
      });
      if (products.length === 0) {
        return res.status(404).json({ msg: "No results found" });
      }
      return res.status(200).json(products);
    }
    const products = await Product.find({merchant_id: req.user.id});

    if (products.length === 0) {
      return res.status(404).json({ msg: "Products are  not found" });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", erorr: error.message });
  }
});

module.exports = router;
