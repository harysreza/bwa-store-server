var express = require("express");
var router = express.Router();
const { index } = require("./controller");

const { isLogInAdmin } = require("../middleware/auth");

router.use(isLogInAdmin);
router.get("/", index);

module.exports = router;
