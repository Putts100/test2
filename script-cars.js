const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i >= index && i < index + 3) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextSlide() {
    if (currentSlide < slides.length - 3) {
        currentSlide++;
    } else {
        currentSlide = 0; // Если достигнут последний слайд, перейти к первому
    }
    showSlide(currentSlide);
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 3; // Если на первом слайде, перейти к последнему
    }
    showSlide(currentSlide);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

showSlide(currentSlide);


