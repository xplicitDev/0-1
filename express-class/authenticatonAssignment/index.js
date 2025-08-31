const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
  {
    username: "masood@gmail.com",
    password: "123",
    name: "masood khan",
  },
  {
    username: "harshit@gmail.com",
    password: "123321",
    name: "harshit kumar ambesh",
  },
  {
    username: "naman@gmail.com",
    password: "123123",
    name: "naman mishra",
  },
];

function userExists(username, password) {
  //write logic to return true or false if this user exists
  //in ALL_USERS array
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    //return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid Token",
    });
  }
});

app.listen();
