const fs = require("fs");

fs.readFile("readFile.txt", "utf-8", function (err, data) {
  console.log(data);
});
