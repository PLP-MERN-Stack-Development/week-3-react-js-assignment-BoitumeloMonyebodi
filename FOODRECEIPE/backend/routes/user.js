const express = require("express");
const router = express.Router();
const { signupUser, loginUser, getUseById } = require("../controller/user");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);

module.exports = router;