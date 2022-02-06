let express = require("express");
const { v4: uuidv4 } = require("uuid");
let multer = require("multer");
let router = express.Router();
const aws = require("aws-sdk");
require("dotenv").config();

var Xray = require("x-ray");
var xray = new Xray();

const multerS3 = require("multer-s3");
aws.config.update({
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_ID,
  region: process.env.REGION,
});

const upload = multer({
  storage: multerS3({
    s3: new aws.S3(),
    bucket: process.env.AWS_BUCKET,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      cb(null, file.originalname + "/" + uuidv4());
    },
  }),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error(
          "File Type not accepted, only accepted types are .png .jpg and .jpeg "
        )
      );
    }
  },
});

// @post request
// end point : /api/images/single-image-upload

router.post(
  "/single-image-upload",
  upload.single("image"),
  async (req, res, next) => {
    return res.json({
      message: "Image uploaded successfully",
      imageUrl: req.file.location,
    });
  }
);

module.exports = router;
