const express = require("express");
const app = express();

const users = [
  {
    name: "Masood",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const masoodKidneys = users[0].kidneys;
  console.log(masoodKidneys);
  res.send("Kidney Health " + masoodKidneys);
});

app.listen(3000);
