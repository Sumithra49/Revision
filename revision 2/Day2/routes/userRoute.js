const express = require("express");
const createUser = require("../controller/userController");
const { register, login } = require("../controller/auth");
const router = express.Router();
router.post("/user", createUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
