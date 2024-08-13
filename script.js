const responsiveNav = document.querySelector(".responsive-nav");
const menuIcon = document.querySelector(".menu-icon");
const dropdown1 = document.querySelector("#dropdown1");
const dropdownMenu1 = document.querySelector("#dropdownMenu1");
const dropdown2 = document.querySelector("#dropdown2");
const dropdownMenu2 = document.querySelector("#dropdownMenu2");
const textheading = document.querySelector(".inner-box h4");
const textHover = document.querySelector(".text-hover");

menuIcon.addEventListener("click", () => {
  responsiveNav.classList.toggle("hidden");
});

dropdown1.addEventListener("click", () => {
    dropdownMenu1.classList.toggle("hidden");
});

dropdown2.addEventListener("click", () => {
    dropdownMenu2.classList.toggle("hidden");
});

textheading.addEventListener("click", () => {
    textHover.classList.toggle("hidden");
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

