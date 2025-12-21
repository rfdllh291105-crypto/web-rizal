let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});
