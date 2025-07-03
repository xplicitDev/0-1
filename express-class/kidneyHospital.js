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
  // console.log(masoodKidneys);
  const numberOfKidneys = masoodKidneys.length;

  let numberOfHealthyKidneys = 0;

  for (i = 0; i < masoodKidneys.length; i++) {
    if (masoodKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.listen(3000);
