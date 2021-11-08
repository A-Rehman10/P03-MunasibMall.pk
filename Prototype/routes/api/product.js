const express = require("express");
const { auth, merchant } = require("../../middleware/auth");
const Store = require("../../models/Store");
const Product = require("../..//models/Product");
const { check, validationResult } = require("express-validator");

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

    const { title, description, actual_price, discount, store_name } = req.body;
    try {
      let findStore = await Store.findOne({ store_name });

      if (!findStore) {
        return res.status(404).json({ errors: [{ msg: "Store not found" }] });
      }
      let discount_percentage_value = discount / 100;
      let discounted_price =
        actual_price - actual_price * discount_percentage_value;

      let product = new Product({
        title,
        description,
        actual_price,
        discount,
        discounted_price,
        store_id: findStore.id,
        store_name,
        merchant_id: req.user.id,
      });

      await product.save();

      res.json(product);
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

module.exports = router;
