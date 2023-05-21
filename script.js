let demoBtn = document.getElementById("watchDemoBtn");
let learnBtn = document.querySelector(".first-block .secondary-button");
let hamburgerBtn = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobail-menu");
let menuHeader = document.querySelector(".header-top");

// console.log(mobileMenu);
// demoBtn.style.backgroundColor = "red";
// learnBtn.style.backgroundColor = "red";

function toggleMobileMenu(){
    menuHeader.classList.toggle("mobile-menu-visible");
}

hamburgerBtn.addEventListener("click", toggleMobileMenu)

// mobileMenu.classList.add("mobile-menu-visible");