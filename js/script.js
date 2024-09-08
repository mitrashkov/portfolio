// JavaScript for smooth scroll (optional enhancements can be added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations
const scrollElements = document.querySelectorAll('.js-scroll');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    })
}

window.addEventListener('scroll', () => { 
    handleScrollAnimation();
});

document.querySelectorAll('.image-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const infoBox = document.getElementById('info-box');
        infoBox.textContent = this.getAttribute('data-info');
        infoBox.classList.add('active');
    });

    item.addEventListener('mouseleave', function() {
        const infoBox = document.getElementById('info-box');
        infoBox.classList.remove('active');
    });

    item.addEventListener('click', function() {
        const infoBox = document.getElementById('info-box');
        infoBox.textContent = this.getAttribute('data-info');
        infoBox.classList.toggle('active');
    });
});
