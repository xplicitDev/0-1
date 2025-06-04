let count = 30;

const countdown = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);
    console.log("Countdown finished!");
  }
}, 1000); // 1000 milliseconds = 1 second
