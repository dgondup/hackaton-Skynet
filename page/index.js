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

  prvBtn[i].addEventListener("click", (evt) => {
    section.scrollLeft -= sliderWidth;
    console.log(evt.target);
  });

  nxtBtn[i].addEventListener("click", (evt) => {
    section.scrollLeft += sliderWidth;
    console.log(evt.target);
  });
});

const selectCountry = (id, loc) => {
  console.log(countryArea);

  if (id === "lam") {
    let po = loc + 1;
    countryArea[loc].classList.remove("slider_inactive");
    countryArea[2].classList.add("slider_inactive");
  }
  if (id === "eua") {
    countryArea[loc - 1].classList.add("slider_inactive");
    countryArea[loc].classList.remove("slider_inactive");
  }
};

console.log(countryBtn);
for (i = 0; i < countryBtn.length; i++) {
  countryBtn[i].addEventListener("click", (i) => {
    console.log(i.target);
    let country = i.target.id;
    let loc = i.target.value;
    selectCountry(country, loc);
  });
}
