const express = require("express");
const { auth, merchant } = require("../../middleware/auth");
const Store = require("../../models/Store");
const { check, validationResult } = require("express-validator");
const Product = require("../..//models/Product");

const router = express.Router();

//add store
// @post request
// end point :  /api/store/create

router.post(
  "/create",
  [
    auth,
    merchant,
    [
      check("store_name", "Store name is required").not().isEmpty(),
      check("store_city", "City name is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { store_name, store_city, store_image } = req.body;
    try {
      let findStore = await Store.findOne({ name: store_name });

      if (findStore) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Store already exists" }] });
      }

      findStore = new Store({
        name: store_name,
        merchant_id: req.user.id,
        store_city,
        store_image,
      });

      await findStore.save();

      res.json(findStore);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

//get all Store
// @get request
// end point :  /api/store/get-all

router.get("/get-all", async (req, res) => {
  try {
    const { searchStore } = req.query;
    const searchPattern = new RegExp(".*" + searchStore + ".*", "i");
    if (searchStore) {
      const stores = await Store.find({
        name: searchPattern,
      });
      if (stores.length === 0) {
        return res.status(404).json({ msg: "No results found" });
      }
      return res.status(200).json(stores);
    }
    const stores = await Store.find();
    res.json(stores);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

//get your Store
// @get request
// end point :  /api/store/your-store

router.get("/your-store", auth, merchant, async (req, res) => {
  try {
    const { searchStore } = req.query;
    const searchPattern = new RegExp(".*" + searchStore + ".*", "i");
    if (searchStore) {
      const stores = await Store.find({
        name: searchPattern,
        merchant_id: req.user.id,
      });
      return res.status(200).json(stores);
    }
    const stores = await Store.find({ merchant_id: req.user.id });
    res.json(stores);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// delete store
// @delete request
// endpoint: /api/store/:store_id/delete

router.delete("/:store_id/delete", auth, merchant, async (req, res) => {
  try {
    const store = await Store.findById(req.params.store_id);
    if (!store) {
      return res.status(404).json({ msg: "Store not found" });
    }
    await Product.deleteMany({ store_id: req.params.store_id });
    await store.remove();
    return res.status(200).json({ msg: "Store deleted successfully" });
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(500).json({ msg: "Server Error", erorr: error.message });
  }
});

// update store
// @put request
// endpoint: /api/store/:store_id/update

router.put(
  "/:store_id/update",
  [
    auth,
    merchant,
    [
      check("store_name", "Store name is required").not().isEmpty(),
      check("store_city", "City name is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    try {
      const { store_name, store_city, store_image } = req.body;
      let store = await Store.findById(req.params.store_id);
      if (!store) {
        return res.status(404).json({ msg: "Store not found" });
      }
      store.name = store_name;
      store.store_city = store_city;
      store.store_image = store_image;

      await store.save();
      return res.status(200).json({ msg: "Store updated successfully", store });
    } catch (error) {
      if (error.kind == "ObjectId") {
        return res.status(404).json({ msg: "Product not found" });
      }
      res.status(500).json({ msg: "Server Error", erorr: error.message });
    }
  }
);

module.exports = router;
