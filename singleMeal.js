const singleMealPage = document.createElement("div");
singleMealPage.classList.add("container", "single-meal-container");

function displaySinglePage(meals) {
  singleMealPage.innerHTML = meals.meals.map((meal) => {
    return getSingleMealHtml(meal);
  });
}

function getSingleMealHtml(meal) {
  let singleMeal = `
        <div class="single-meal-details">
          <img class="single-meal-img" src="${meal.strMealThumb}" alt="" />
          <div class="ingredients-table">
            <h2 class="single-meal-ingredients-subtitle">
              <i class="fas fa-clipboard-list"></i>Ingredients
            </h2>
            <table class="table">
            <tbody class="ingredients-table-body">
              ${displayIngredientsHtml(meal)}
            </tbody>
            </table>
          </div>
        </div>
        <div class="single-meal-main">
          <h1 class="single-meal-main-title">${meal.strMeal}</h1>
          <div class="single-recipe-taxonomies">
            <p>Categories: ${meal.strCategory}</p>
            <p>Cuisine: <img src="./flags/${
              meal.strArea
            }.png" class="flag-img"/></p>
          </div>
          <div class="single-meal-main-directions">
            <h2 class="single-meal-subtitle">
              <i class="fas fa-list"></i>Instructions
            </h2>
            <p>${meal.strInstructions}</p>
          </div>
       
          </div>
        </div>
    `;
  return singleMeal;
  //      <div class="single-meal-main-video">
  //   <h2 class="single-meal-subtitle">
  //   <i class="fab fa-youtube"></i>Video
  // </h2>
  // <iframe
  //   width="100%"
  //   height="315"
  //   src="${meal.strYoutube}"
  // >
  // </iframe>
}

const tableIngredientsBody = document.querySelector(".ingredients-table-body");

function getIngredients(ingredient) {
  // gets on object with all the ingredients
  let ingredients = [];
  for (i = 1; i <= 20; i++) {
    if (`${ingredient[`strIngredient${i}`]}` !== "")
      ingredients.push(
        `${ingredient[`strMeasure${i}`]} ${ingredient[`strIngredient${i}`]}`
      );
  }
  //returns an object
  return ingredients;
}

function displayIngredientsHtml(ingredient) {
  let ingredients = getIngredients(ingredient);
  let ingredientHtml = [];
  ingredients.map((ingr) => {
    ingredientHtml += `
    <tr>
      <td class="circle-icon-td">
        <span class="circle-icon"
          ><i class="far fa-circle"></i
        ></span>
      </td>
      <td>${ingr}</td>
    </tr>
    `;
  });

  return ingredientHtml;
}
