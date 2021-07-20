// const sliderContainer = document.querySelector(".carousel-container");
// const mealCardsContainer = document.querySelector(
//   ".meal-card-results-container"
// );
const randomRecipe = document.getElementById("random");

async function getRandomRecipe() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );
  const data = await response.json();
  return data;
}
allWrapper.appendChild(singleMealPage);

getRandomRecipe().then(displaySinglePage);
