const mongoose = require("mongoose");
const { JOKE_TYPE } = require("../constants/model_constants");

const jokeTypeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(JOKE_TYPE, jokeTypeSchema);
