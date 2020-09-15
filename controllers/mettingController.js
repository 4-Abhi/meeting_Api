const Metting = require("./../models/mettingModel")

exports.CreateMetting = async (req, res) => {
    try {
        const startTimes = req.body.startTimes;
        const exitmeeting = await Metting.findOne({ startTimes: startTimes })
        if (exitmeeting) {
            return res.status(404).send("Meeting Already Exits");
        }
        const metting = await Metting.create(req.body);
        console.log(metting)
        return res.status(201).json({
            status: "Success",
            data: metting
        })

    } catch (err) {
        console.log(err);
        res.status(404).send(err);

    }
}
exports.AllMetting = async (req, res) => {
    try {
        console.log("Mmmmmmmm");
        const metting = await Metting.find();

        if (!metting) {
            return res.send(404).send("No meeting In Databse")
        }
        return res.status(200).json({
            status: "success",
            data: metting
        })
    } catch (err) {
        res.status(404).send(err);
    }
}
exports.getMeeting = async (req, res) => {
    try {
        console.log("Mmmmmmmm");
        const metting = await Metting.findById(req.params.id);

        if (!metting) {
            return res.send(404).send("No meeting In Databse")
        }
        return res.status(200).json({
            status: "success",
            data: metting
        })
    } catch (err) {
        res.status(404).send(err);
    }
}
exports.updateMetting = async (req, res) => {

    try {
        console.log(req.body)
        const metting = await Metting.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidator: true,
        })
        if (!metting) {
            return res.status("404").send("this meeting are not available")
        }
        return res.status(200).json({
            status: "succes",
            data: metting
        })

    } catch (err) {


    }
}
exports.DeleteMetting = async (req, res) => {
    try {
        const metting = await Metting.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: null
        })
    } catch (err) {
        res.status(404).send({
            status: "fail",
            message: err
        })

    }
}
