const Joke = require("../models/joke-model");
const JokeType = require("../models/joke_type_model");

exports.submitJoke = async (req, res) => {
  try {
    const { content, typeId } = req.body;
    const jokeType = await JokeType.findById(typeId);

    if (!jokeType) {
      return res.status(404).json({ message: "Joke type not found" });
    }
    const joke = new Joke({ content, type: jokeType._id });
    await joke.save();
    res.status(201).json({ message: "Joke submitted successfully", joke });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit joke", error });
  }
};

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve jokes", error });
  }
};

exports.getJokeById = async (req, res) => {
  try {
    const { id } = req.params;
    const joke = await Joke.findById(id);
    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve joke", error });
  }
};

exports.updateJokeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, typeId, approved } = req.body;

    const joke = await Joke.findById(id);
    if (joke) {
      joke.content = content;
      joke.type = typeId;
      joke.approved = approved;
      await joke.save();
    }

    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }
    res.status(200).json({ message: "Joke updated successfully", joke });
  } catch (error) {
    res.status(500).json({ message: "Failed to update joke", error });
  }
};

exports.deleteJokeById = async (req, res) => {
  try {
    const { id } = req.params;
    const joke = await Joke.findByIdAndDelete(id);
    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }
    res.status(200).json({ message: "Joke deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete joke", error });
  }
};
