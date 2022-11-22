const slides = document.getElementsByClassName("header__slider");
const mexBtn = document.querySelector("#lam");
const usaBtn = document.querySelector("#usa");

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

const scrollerArea = [...document.querySelectorAll(".slider__area")];

const nxtBtn = [...document.querySelectorAll("#next-btn")];
const prvBtn = [...document.querySelectorAll("#prev-btn")];

scrollerArea.forEach((item, i) => {
  let sliderDimensions = item.getBoundingClientRect();
  let sliderWidth = sliderDimensions.width;

  prvBtn[i].addEventListener("click", () => {
    item.scrollLeft += sliderWidth;
  });

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft -= sliderWidth;
  });
});

const selectMex = () => {
  if (mexBtn) {
    console.log("hi");
  }
};
