console.log("Masood");

for (i = 0; i <= 1000; i++) {
  // console.log(i);
}

answer = 0;

for (i = 0; i <= 1000; i++) {
  answer = answer + i;
}

// console.log(answer);

const ages = [18, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31];

const numbersOfPeople = ages.length;

for (i = 0; i < numbersOfPeople; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

let max = ages[0];

for (i = 0; i < numbersOfPeople; i++) {
  if (ages[i] > max) {
    max = ages[i];
  }
}

console.log("Largest Number is " + max);

// const numbers = [12, 45, 67, 3, 89, 23];
// let max = numbers[0]; // Start with the first element

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i]; // Update max if current number is greater
//   }
// }

// console.log("Greatest number is:", max);
