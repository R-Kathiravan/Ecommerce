
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".btn-close");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("show");
});

closeBtn.addEventListener("click", function () {
    menu.classList.remove("show");
});

document.addEventListener("click", function (e) {
    const clickedInsideMenu = menu.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);

    if (!clickedInsideMenu && !clickedHamburger && menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
});