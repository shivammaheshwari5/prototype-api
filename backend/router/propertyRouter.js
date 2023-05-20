const express = require("express");
const {
  propertyDetail,
  getPropertyDetail,
} = require("../controller/propertyPageController");
const router = express.Router();

router.route("/").post(propertyDetail);
router.route("/").get(getPropertyDetail);
module.exports = router;
