const slides = document.getElementsByClassName("header__slider");
const mexBtn = [...document.querySelectorAll("#lam")];
const usaBtn = [...document.querySelectorAll("#usa")];
const countryBtn = [...document.querySelectorAll(".flag")];
const countryArea = [...document.querySelectorAll(".slider")];
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

const selectCountry = (i) => {
  console.log(i.path[0]);
  if (i.path[0].id === "lam") {
    countryArea[2].style.display = "none";
    countryArea[1].style.display = "block";
  }
  if (i.path[0].id === "usa") {
    countryArea[1].style.display = "none";
    countryArea[2].style.display = "block";
  }
};

console.log(countryBtn);
for (i = 0; i < mexBtn.length; i++) {
  mexBtn[i].addEventListener("click", selectCountry);
}
for (i = 0; i < usaBtn.length; i++) {
  usaBtn[i].addEventListener("click", selectCountry);
}
