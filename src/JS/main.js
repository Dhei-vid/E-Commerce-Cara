const mobileBtn = document.querySelector(".mobileMenu");
const navEle = document.getElementById("navbar");

mobileBtn.addEventListener("click", function () {
  navEle.classList.add("active");
});
