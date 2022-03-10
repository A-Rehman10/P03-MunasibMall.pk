const express = require("express");
const { auth, merchant } = require("../../middleware/auth");
const Categories = require("../../models/Categories");
const { check, validationResult } = require("express-validator");

const router = express.Router();

//add category
// @post request
// end point :  /api/category

router.post(
  "/",
  [auth, merchant, [check("name", "Category name required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;
    try {
      let findCategory = await Categories.findOne({ name });

      if (findCategory) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Category already exists" }] });
      }

      findCategory = new Categories({
        name,
      });

      await findCategory.save();

      res.json(findCategory);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

//get all categories
// @get request
// end point :  /api/category

router.get("/", async (req, res) => {
  try {
    const categories = await Categories.find();
    res.json(categories);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;