const express = require("express");
// const bodyParser = require("body-parser");
const port = 3000;
const app = express();

//middleware
// app.use(bodyParser.json());

///////////////
app.get("/masood", function (req, res) {
  res.send("Hello Masood Khan!");
});

app.get("/", function (req, res) {
  // console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
