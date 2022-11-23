const slides = document.getElementsByClassName("header__slider");
const mexBtn = [...document.querySelectorAll("#lam")];
const usaBtn = [...document.querySelectorAll("#usa")];
const countryBtn = [...document.querySelectorAll(".flag")];
const countryArea = [...document.querySelectorAll(".slider")];
const nxtBtn = [...document.querySelectorAll("#next-btn")];
const prvBtn = [...document.querySelectorAll("#prev-btn")];
const scrollerArea = [...document.querySelectorAll(".slider__area")];

const scrolledImage = [...document.querySelectorAll("#slide-img")];

let currentSlide = 0;

let imageWidth;

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

console.log(scrollerArea);

const selectCountry = (id, loc) => {
  console.log(id, loc);
  if (id === "lam") {
    countryArea[loc].classList.remove("slider_inactive");
    countryArea[loc + 1].classList.add("slider_inactive");
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
    let loc = parseFloat(i.target.value);
    selectCountry(country, loc);
  });
}

scrollerArea.forEach((section, i) => {
  prvBtn[i].addEventListener("click", () => {
    section.scrollLeft -= imageWidth;
  });

  nxtBtn[i].addEventListener("click", () => {
    section.scrollLeft += imageWidth;
  });
});

const windowResize = () => {
  scrolledImage.forEach((img) => {
    img.width = window.innerWidth - 19;
    console.log(img);
    return (imageWidth = img.width);
  });
};

window.addEventListener("resize", windowResize);
