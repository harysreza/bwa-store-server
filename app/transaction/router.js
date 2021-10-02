var express = require("express");
var router = express.Router();
const { index, actionStatus } = require("./controller");
const { isLogInAdmin } = require("../middleware/auth");

router.use(isLogInAdmin);
router.get("/", index);
router.put("/status/:id", actionStatus);

module.exports = router;
