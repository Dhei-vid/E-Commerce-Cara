// Hot module Replacement
if (module.hot) {
  module.hot.accept();
}

const navEle = document.getElementById("navbar");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileClose = document.getElementById("mobileClose");

mobileMenu.addEventListener("click", function () {
  navEle.classList.add("active");
});

mobileClose.addEventListener("click", function () {
  navEle.classList.remove("active");
});

function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0 && i % 5 != 0) {
      console.log("Fizz");
    } else if (i % 5 == 0 && i % 3 != 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
