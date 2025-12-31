document.addEventListener('DOMContentLoaded', () => {


    const themeToggleBtn = document.getElementById('theme-toggle1');
    const htmlElement = document.documentElement;

    feather.replace();

    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        const theme = htmlElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        themeToggleBtn.innerHTML = `
            <i data-feather="${theme === 'dark' ? 'sun' : 'moon'}"></i>
        `;
        feather.replace();
    }

    const addButtons = document.querySelectorAll('.add-btn');
    const cartBadge = document.querySelector('.badge');
    let count = 0;

    addButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            count++;
            cartBadge.textContent = count;
            const originalText = this.textContent;
            this.textContent = "Added";
            this.style.background = "var(--text-main)";
            this.style.color = "var(--bg-body)";

            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = "";
                this.style.color = "";
            }, 1500);
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");
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