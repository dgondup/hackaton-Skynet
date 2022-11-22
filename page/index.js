const slides = document.getElementsByClassName("header__slider");
const mexBtn = document.querySelector("#lam");
const usaBtn = document.querySelector("#eua");
const nxtBtn = [...document.querySelectorAll("#next-btn")];
const prvBtn = [...document.querySelectorAll("#prev-btn")];
const scrollerArea = [...document.querySelectorAll(".slider__area")];

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

scrollerArea.forEach((section, i) => {
  let sliderDimensions = section.getBoundingClientRect();
  let sliderWidth = sliderDimensions.width;

  prvBtn[i].addEventListener("click", () => {
    section.scrollLeft += sliderWidth;
  });

  nxtBtn[i].addEventListener("click", () => {
    section.scrollLeft -= sliderWidth;
  });
});

const countryArea = [...document.querySelectorAll(".slider")];
console.log(countryArea);

const selectCountry = (a) => {
  console.log(a.target.id);
  if (a.target.id === "lam") {
    countryArea[2].style.display = "none";
    countryArea[1].style.display = "block";
  }
  if (a.target.id === "eua") {
    countryArea[1].style.display = "none";
    countryArea[2].style.display = "block";
  }
};

mexBtn.addEventListener("click", selectCountry);
usaBtn.addEventListener("click", selectCountry);
