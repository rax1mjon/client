const loading = document.getElementById("loading");

const loadingDuration = 5000;

setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);


// window.addEventListener("scroll", function () {
//     shrink();
// });

// let navbar = document.getElementById("header");

// function shrink() {
//     if (scrollY > 780) {
//         navbar.classList.add("navbar-shrink");
//     } else {
//         navbar.classList.remove("navbar-shrink");
//     }
// }


// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.getElementById('humburger');
//     const navLinks = document.getElementById('nav--bottom');

//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('humburger');
    const navLinks = document.getElementById('nav--bottom');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('activeh');
    });
});


indow.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
    ) {
        backtop.classList.add('backtop-show')
    } else {
        backtop.classList.remove('backtop-show')
    }
}