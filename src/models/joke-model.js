const mongoose = require("mongoose");
const { JOKE, JOKE_TYPE } = require("../constants/model_constants");

const jokeSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    content: { type: String, required: true },
    type: { type: mongoose.Schema.Types.ObjectId, ref: JOKE_TYPE, required: true },
    approved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(JOKE, jokeSchema);
