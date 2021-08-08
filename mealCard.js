function displayMealCards(meals) {
  let mealCardsContainer = document.querySelector(
    ".meal-card-results-container"
  );

  mealCardsContainer.innerHTML = `
    <div class="meal-card-results">
      ${meals.meals
        .map((meal) => {
          return getMealCardHtml(meal);
        })
        .join("")}
      </div>`;
  return mealCardsContainer;
}

function getMealCardHtml(meal) {
  let mealCard = `
    <div class="meal-card">
      <a href="#"
        ><img
          src="${meal.strMealThumb}"
          alt="food"
          class="meal-card-img"
      /></a>
      <h3 class="meal-card-title">${meal.strMeal}</h3>
        <div class="meal-card-meta">
      <a href="#" class="meal-card-tag">${meal.strCategory}</a>
        <a href="#" class="meal-card-flag-link"
        ><img
          src="./flags/${meal.strArea}.png"
          alt="${meal.strArea}"
          class="flag-img meal-card-flag-img"
      /></a>
      </div>
      <p class="meal-card-intro">
        Put your wine, shallot, herbs and peppercorns into a small pot and
        bring to the boil, then simmer slowly for...
      </p>
      <a href="#" class="meal-card-button">Read More</a>
    </div>`;
  return mealCard;
}
