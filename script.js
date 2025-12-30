document.addEventListener('DOMContentLoaded', () => {

 
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Initialize Feather icons once
        feather.replace();

        // Load saved theme
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




    // --- 2. SCROLL ANIMATIONS (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target all elements with class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    // --- 3. SIMPLE CART INTERACTION ---
    const addButtons = document.querySelectorAll('.add-btn');
    const cartBadge = document.querySelector('.badge');
    let count = 0;

    addButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            count++;
            cartBadge.textContent = count;

            // Button Animation Feedback
            const originalText = this.textContent;
            this.textContent = "Added";
            this.style.background = "var(--text-main)";
            this.style.color = "var(--bg-body)";

            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = ""; // revert to css default
                this.style.color = "";      // revert to css default
            }, 1500);
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});