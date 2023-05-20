const express = require("express");
const { sendMessages } = require("../controller/messageController");
const { getMessages } = require("../controller/messageController");
const router = express.Router();

router.route("/").post(sendMessages);
router.route("/").get(getMessages);

module.exports = router;
