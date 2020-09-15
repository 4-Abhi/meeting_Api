const mongoose = require("mongoose");

const MettingUserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,

        minlength: [4, 'Name should be longer then 4 Chracter'],
        maxlength: [25, "Name is too long"],
        required: [true, "A meeting person must Have Name"]
    }
})

const MettingUser = mongoose.model("MettingUser", MettingUserSchema);

module.exports = MettingUser;