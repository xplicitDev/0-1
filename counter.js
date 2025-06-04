let count = 30;

function counter() {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);
    console.log("Countdown finished!");
  }
}

const countdown = setInterval(counter, 1000);
