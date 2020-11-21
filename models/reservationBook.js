const mongoose = require("mongoose");
const bookingBookSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    startDay: {
      type: String,
      required: true
    },
    endDay: {
      type: String,
      required: true,
      validate: {
        validator: endDay => {
          return !this.startDay <= endDay;
        },
        message: endTime => `endTime must be larger than startTime`
      }
    },
    ISBN: {
      type: mongoose.Schema.Types.Number,
      ref: "book"
    }
  },
);
  module.exports = mongoose.model("reservationBook", bookingBookSchema);