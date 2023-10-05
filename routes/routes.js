const express = require("express");
const {
  getAllCards,
  postNewCard,
  getCardById,
  deleteCardById,
  updateCardById,
} = require("../controller/controller");
const router = express.Router();

router.get("/", getAllCards);
router.post("/", postNewCard);
router.get("/:id", getCardById);
router.delete("/:id", deleteCardById);
router.patch("/:id", updateCardById);

module.exports = router;
