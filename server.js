const path = require("path");
const express = require("express");
const cors = require("cors");
const cardsRouter = require("./routes/routes");
const connectDB = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use("/api/cards", cardsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Random Ideas API");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
