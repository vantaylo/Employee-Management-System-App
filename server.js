const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("", (req, res) => {
  res.send("");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
