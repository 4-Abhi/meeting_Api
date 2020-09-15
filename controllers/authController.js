const User = require("../models/authModels");
const jwt = require('jsonwebtoken');
const { CreateToken } = require("../utils/createToken");


exports.SignUp = async (req, res) => {

    try {
        const exituser = await User.findOne({ email: req.body.email });
        if (exituser) return res.status(400).send("User Already Exits");

        const user = await User.create(req.body);
        const token = await CreateToken(user)
        return res.status(201).json({
            token,
            status: "Success",
            data: user

        })

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }

}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                status: "fail",
                message: "No User find Please SignUp"
            })
        }
        const password = await user.correctPassword(req.body.password, user.password);
        if (!password) {
            return res.status(404).json({
                status: 'fail',
                message: "please enterd valid email or password "
            })
        }
        const token = CreateToken(user)
        return res.status(200).json({
            status: "succes",
            token
        });
    } catch (err) {
        console.log("Errrror ", err);

    }

}