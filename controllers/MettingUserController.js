const Metting = require("../models/mettingUserModel");

exports.CreateMettingUser = async (req, res) => {
    try {
        const metting = await Metting.create(req.body);
        return res.status(201).json({
            status: "Success",
            data: metting
        })

    } catch (err) {
        res.status(404).send("Error is ", err);

    }
}
exports.GetAllMettingUser = async (req, res) => {
    try {
        const metting = await Metting.find();
        return res.status(200).json({
            status: "success",
            data: metting
        })
    } catch (err) {
        res.status(404).send(err);

    }
}