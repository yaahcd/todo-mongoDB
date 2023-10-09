const Card = require("../model/cardSchema");

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).send(cards);
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

exports.getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    res.status(200).send({ card });
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

exports.postNewCard = async (req, res) => {
  const newCard = new Card({
    text: req.body.text,
  });

  try {
    const savedCard = await newCard.save();
    res.status(201).send(savedCard);
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

exports.deleteCardById = async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    return res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

exports.updateCardById = async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          date: new Date(),
        },
      },
      { new: true }
      //if idea does not exist, new: true creates it
    );
    return res.status(200).send({ updatedCard });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};
