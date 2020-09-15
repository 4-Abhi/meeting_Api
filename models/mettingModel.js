const mongoose = require("mongoose");

const mettingSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "A meeting Must Have A Title"]
    },
    startDates: Date,
    startTimes: {
        type: Number,
        unique: true,
        trim: true,
        required: [true, 'A meeting Must have A Start  Timing']
    },

    meetingPersonId:
        {
            type: mongoose.Schema.ObjectId,
            ref: 'MettingUser',
            required: [true, 'A product must have catgeory']

        }
}, {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)

mettingSchema.virtual('endTiming').get(function () {
    return this.startTimes + 1;
})
mettingSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'meetingPersonId',
        select: '-__v'

    })
    next();
})

const Metting = mongoose.model("Metting", mettingSchema);

module.exports = Metting;