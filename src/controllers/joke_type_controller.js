const JokeTypes = require("../models/joke_type_model");

exports.submitJokeType = async (req, res) => {
  try {
    const { type } = req.body;
    const jokeType = new JokeTypes({ type });
    await jokeType.save();
    res.status(201).json({ message: "Joke Type submitted successfully", jokeType });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit joke type", error });
  }
};

exports.getAllJokeTypes = async (req, res) => {
  try {
    const jokeTypes = await JokeTypes.find();
    res.status(200).json(jokeTypes);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve joke types", error });
  }
};

exports.getJokeTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const jokeType = await JokeTypes.findById(id);
    if (!jokeType) {
      return res.status(404).json({ message: "Joke Type not found" });
    }
    res.status(200).json(jokeType);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve joke type", error });
  }
};

exports.updateJokeTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body;
    const jokeType = await JokeTypes.findByIdAndUpdate(id, { type }, { new: true });
    if (!jokeType) {
      return res.status(404).json({ message: "Joke Type not found" });
    }
    res.status(200).json({ message: "Joke Type updated successfully", jokeType });
  } catch (error) {
    res.status(500).json({ message: "Failed to update joke type", error });
  }
};

exports.deleteJokeTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const jokeType = await JokeTypes.findByIdAndDelete(id);
    if (!jokeType) {
      return res.status(404).json({ message: "Joke Type not found" });
    }
    res.status(200).json({ message: "Joke Type deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete joke type", error });
  }
};
