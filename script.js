const responsiveNav = document.querySelector(".responsive-nav");
const menuIcon = document.querySelector(".menu-icon");
const dropdown1 = document.querySelector("#dropdown1");
const dropdownMenu1 = document.querySelector("#dropdownMenu1");
const dropdown2 = document.querySelector("#dropdown2");
const dropdownMenu2 = document.querySelector("#dropdownMenu2");

menuIcon.addEventListener("click", () => {
  responsiveNav.classList.toggle("hidden");
});

dropdown1.addEventListener("click", () => {
  dropdownMenu1.classList.toggle("hidden");
});

dropdown2.addEventListener("click", () => {
  dropdownMenu2.classList.toggle("hidden");
});
