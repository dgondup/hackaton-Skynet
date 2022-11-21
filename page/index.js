const slides = document.getElementsByClassName("header__slider");

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

setInterval(transitionSlides, 3500);

const scrollerArea = document.querySelector(".slider__area");

const nxtBtn = document.querySelector("#next-btn");
const prvBtn = document.querySelector("#prev-btn");

const sliderDimensions = scrollerArea.getBoundingClientRect();
const sliderWidth = sliderDimensions.width;

prvBtn.addEventListener("click", () => {
  scrollerArea.scrollLeft += sliderWidth;
});

nxtBtn.addEventListener("click", () => {
  scrollerArea.scrollLeft -= sliderWidth;
});
