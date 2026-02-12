const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle Menu (Mobile)
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close Menu on Link Click
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Typing Animation
var typed = new Typed(".auto-type", {
    strings: ["Full Stack Developer", "MERN Stack Expert", "Problem Solver", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});