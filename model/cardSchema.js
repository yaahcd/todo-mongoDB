const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add a text field"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Card", CardSchema);
