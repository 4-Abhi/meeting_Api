const express = require('express');
const MettingUserControler = require("../controllers/MettingUserController");

const router = express.Router();

router.route('/')
    .get(MettingUserControler.GetAllMettingUser)
    .post(MettingUserControler.CreateMettingUser);

module.exports = router;