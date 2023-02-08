require('dotenv').config();
const express = require("express");
const axios = require("axios");
const app = express();
const apiKey = process.env.SPELLCHECKER_API;

app.get("/api/spellcheck/:word?", async (req, res) => {
  const word = req.params.word;
  try {
    const response = await axios.get(`${apiKey}/spellcheck/${word}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

app.use(express.static(`${__dirname}/client/build`));

app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
