const express = require("express");
const { auth, merchant } = require("../../middleware/auth");
const Store = require("../../models/Store");
const { check, validationResult } = require("express-validator");

const router = express.Router();

//add store
// @post request
// end point :  /api/store/create

router.post(
  "/create",
  [
    auth,
    merchant,
    [check("store_name", "Store name is required").not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { store_name } = req.body;
    try {
      let findStore = await Store.findOne({ store_name });

      if (findStore) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Store already exists" }] });
      }

      findStore = new Store({
        store_name,
        merchant_id: req.user.id,
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
        store_name: searchPattern,
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
        store_name: searchPattern,
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

module.exports = router;
