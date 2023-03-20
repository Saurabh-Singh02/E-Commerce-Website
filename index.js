// code for slider
const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
const slideWidth = slider.offsetWidth;
let slideIndex = 0;

function slide() {
    slides.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}

function prev() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    }
    slide();
}

function next() {
    slideIndex++;
    if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }
    slide();
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

slide();