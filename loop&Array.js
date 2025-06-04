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

const array = [5, 4, 3, 2, 1, 0];

for (i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
