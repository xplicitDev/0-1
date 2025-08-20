const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  //for these check points middleware is going to be used,so we can add a checkpoint anywhere before the request actually processes
  if (username != "masood" || password != "pass") {
    res.status(400).json({ msg: "Somethings up with your inputs" });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "Somethings up with your inputs" });
    return;
  }

  res.json({
    msg: "Your Kidney is fine!",
  });
});

app.listen(4000);
