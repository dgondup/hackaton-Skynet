//codigo para el header de la pagina

/*const slides = document.getElementsByClassName("before__content");
const buttons = document.querySelectorAll("before__button");

let currentSlide = 0;

const transitionSlides = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  currentSlide++;
  if (currentSlide > slides.length) {
    currentSlide = 1;
  }
  slides[currentSlide - 1].style.display = "block";
};

setInterval(transitionSlides, 3500);*/

const scrollerArea = document.querySelector(".slider__area");

const nxtBtn = document.querySelector("#next-btn");
const prvBtn = document.querySelector("#prev-btn");

const sliderDimensions = scrollerArea.getBoundingClientRect();
const sliderWidth = sliderDimensions.width;

console.log(sliderWidth);

prvBtn.addEventListener("click", () => {
  scrollerArea.scrollLeft -= sliderWidth;
});

nxtBtn.addEventListener("click", () => {
  scrollerArea.scrollLeft += sliderWidth;
});
