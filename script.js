/*========== MENU ICON NAVBAR ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


/*========== ACTIVE NAV LINK ON SCROLL ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    /*========== STICKY NAVBAR ==========*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== CLOSE MOBILE MENU ON SCROLL ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});


/*========== DARK / LIGHT MODE ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.addEventListener('click', () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});


/*========== SCROLL REVEAL ANIMATION ==========*/
ScrollReveal({
    distance: '80px',
    duration: 1500,
    delay: 150
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


/*========== SMOOTH SCROLL FOR NAV LINKS ==========*/
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href');
        let targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});