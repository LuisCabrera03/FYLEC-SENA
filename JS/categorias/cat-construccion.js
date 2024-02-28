const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

const changeSlide = () => {
    slides[currentIndex].classList.remove('active');

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    slides[currentIndex].classList.add('active');
};

setInterval(changeSlide, 5000);

// funcion categoria
var ratings = document.getElementsByName('rating');
var ratingValue = document.getElementById('ratingValue');

for (var i = 0; i < ratings.length; i++) {
 ratings[i].addEventListener('change', function () {
 ratingValue.textContent = 'Estrellas: ' + this.value;
 });
}