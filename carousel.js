// SLIDER Section

const slider = document.querySelector(".slider-recipes");
const slideLeft = document.querySelector(".slider-left");
const slideRight = document.querySelector(".slider-right");

//fetch images for slider
async function getRecipes() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let data = await response.json();
  return data.meals;
}

//create sliderCard component
function getSliderItemHtml(slide) {
  let slideItem = `
    <div class="slider-card">
      <img src="${slide.strMealThumb}" alt="" class="slider-card-img" />
      <h3 class="slider-card-title">${slide.strMeal}</h3>
      <div class="slider-card-featured-details">
        <p>Cuisine:</p>
        <img src="./flags/${slide.strArea}.png" alt="${slide.strArea}" class="flag-img"/>
      </div>
    </div>`;
  return slideItem;
}

//display slider items by mapping over the fetched array
function displaySlides(slides) {
  slider.innerHTML = slides.map((slide) => getSliderItemHtml(slide)).join("");
  return slider;
}

getRecipes().then(displaySlides);

//count all the products

let slideIndex = 0;

//move slides to the left
slideLeft.addEventListener("click", () => {
  if (slideIndex === 0) {
    slider.style.transform += `translateX(0px)`;
  } else {
    slider.style.transform += `translateX(390px)`;
    slideIndex -= 1;
    console.log(`slided  left, slideIndex = ${slideIndex}`);
  }
});

//move slides to the right
slideRight.addEventListener("click", () => {
  if (slideIndex === 24 - 2) {
    slider.style.transform += `translateX(0px)`;
  } else {
    slider.style.transform += `translateX(-390px)`;
    slideIndex++;
    console.log(slideIndex);
  }
});

// Move the carousels slider-list by changing the css
function moveSlide() {}
