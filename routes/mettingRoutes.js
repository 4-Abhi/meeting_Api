const express = require("express");
const mettingController = require("./../controllers/mettingController");

const router = express.Router();

router.route('/')
    .get(mettingController.AllMetting)
    .post(mettingController.CreateMetting);

router.route("/:id")
    .get(mettingController.getMeeting)
    .patch(mettingController.updateMetting)
    .delete(mettingController.DeleteMetting)

module.exports = router;