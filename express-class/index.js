//basic query params

// const express = require("express");

// const app = express();

// function sum(n) {
//   let ans = 0;
//   for (i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("Hello your answer is " + ans);
// });

// app.listen(3000);

// map

const arr = [1, 2, 3, 4, 5];

const even = (i) => {
  return i * 2;
};
const ans = arr.map(even);
console.log(ans);

//filter

const arr01 = [1, 2, 3, 4, 5];

function filterLogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const ans01 = arr.filter(filterLogic);
console.log(ans01);
