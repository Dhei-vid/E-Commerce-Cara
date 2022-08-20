// Hot module Replacement
if (module.hot) {
  module.hot.accept();
}

//Mobile navigation
const navEle = document.getElementById("navbar");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileClose = document.getElementById("mobileClose");

mobileMenu.addEventListener("click", function () {
  navEle.classList.add("active");
});

mobileClose.addEventListener("click", function () {
  navEle.classList.remove("active");
});
