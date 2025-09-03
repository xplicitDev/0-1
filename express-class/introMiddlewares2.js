const express = require("express");
const app = express();

function verifyAgeMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry! You're not of age Yet.",
    });
  }
}

app.get("/ride1", verifyAgeMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride1",
  });
});

app.get("/ride2", verifyAgeMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride2",
  });
});

app.listen(3000);
