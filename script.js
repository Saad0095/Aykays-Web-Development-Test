const responsiveNav = document.querySelector(".responsive-nav");
const menuIcon = document.querySelector(".menu-icon");
const dropdown1 = document.querySelector("#dropdown1");
const dropdownMenu1 = document.querySelector("#dropdownMenu1");
const dropdown2 = document.querySelector("#dropdown2");
const dropdownMenu2 = document.querySelector("#dropdownMenu2");
const textheading1 = document.querySelector(".inner-box1 h4");
const textHover1 = document.querySelector(".text-hover1");
const textheading2 = document.querySelector(".inner-box2 h4");
const textHover2 = document.querySelector(".text-hover2");
const textheading3 = document.querySelector(".inner-box3 h4");
const textHover3 = document.querySelector(".text-hover3");

menuIcon.addEventListener("click", () => {
  responsiveNav.classList.toggle("hidden");
});

dropdown1.addEventListener("click", () => {
    dropdownMenu1.classList.toggle("hidden");
});

dropdown2.addEventListener("click", () => {
    dropdownMenu2.classList.toggle("hidden");
});

textheading1.addEventListener("click", () => {
    textHover1.classList.toggle("hidden");
});

textheading2.addEventListener("click", () => {
    textHover2.classList.toggle("hidden");
});

textheading3.addEventListener("click", () => {
    textHover3.classList.toggle("hidden");
});

const prevBtn = document.querySelector(".previous-button"); 
const nextBtn = document.querySelector(".next-button");
const scrollContainer = document.getElementById("scroll-container"); 

prevBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });

const prevBtn2 = document.querySelector(".previous-button2"); 
const nextBtn2 = document.querySelector(".next-button2");
const scrollContainer2 = document.getElementById("scroll-container2"); 

prevBtn2.addEventListener("click", () => {
    scrollContainer2.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  nextBtn2.addEventListener("click", () => {
    scrollContainer2.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });

