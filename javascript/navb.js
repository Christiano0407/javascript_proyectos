const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");
const link = document.querySelectorAll(".nav-link li");

hamburger.addEventListener("click", () => {
    navLink.classList.toggle("open");
    link.forEach(link => {
        link.classList.toggle("fade");
    });
});