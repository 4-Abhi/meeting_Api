const express = require("express");
const authController = require("../controllers/authController")

const router = express.Router();


router.post("/signUp", authController.SignUp);
router.post("/login", authController.login)



module.exports = router;