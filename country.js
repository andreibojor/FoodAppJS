const flagsContainer = document.createElement("div");
flagsContainer.classList.add("container", "flags-container");

const flagsResultsContainer = document.createElement("div");
flagsResultsContainer.classList.add("container", "flags-results-container");

allWrapper.appendChild(flagsContainer);
allWrapper.appendChild(flagsResultsContainer);

async function getCountries() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  const data = await response.json();
  return data.meals;
}

getCountries().then(displayFlags).then(flagButtonsClick);

function displayFlags(flags) {
  flagsContainer.innerHTML = `
    <h2 class="section-title">Browse by country:</h2>
    <div class="flag-buttons">
     ${flags
       .map((flag) => {
         return getFlagButtonHtml(flag.strArea);
       })
       .join("")}
    </div>`;
  return flagsContainer;
}

// Add HTML flag link for every country available in the getCountries()
function getFlagButtonHtml(flag) {
  let flagButton = `
    <button class="flag-btn" value="${flag}">
        <img class="home-flag-img" src="./flags/${flag}.png" alt="${flag}" />
    </button>
    `;
  return flagButton;
}

//add click event on every flag button

function flagButtonsClick() {
  const flagButtons = document.querySelectorAll(".flag-btn");
  //   console.log(flagButtons);
  flagButtons.forEach((flag) => {
    flag.addEventListener("click", () => {
      getCountryRecipes(flag.value).then(displayFlagCards);
    });
  });
}

async function getCountryRecipes(country) {
  const response =
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}
    `);
  const data = await response.json();
  return data;
}

function displayFlagCards(meals) {
  let mealCardsContainer = document.querySelector(".flags-results-container");

  mealCardsContainer.innerHTML = `
        <div class="meal-card-results">
          ${meals.meals
            .map((meal) => {
              return getFlagCardHtml(meal);
            })
            .join("")}
          </div>`;
  return mealCardsContainer;
}

function getFlagCardHtml(meal) {
  let flagCard = `
  <div class="meal-card">
  <a href="#"
    ><img
      src="${meal.strMealThumb}"
      alt="food"
      class="meal-card-img"
  /></a>
  <a href="#"><h3 class="meal-card-title">${meal.strMeal}</h3></a> 
  <a href="#" class="meal-card-button">Read More</a>
</div>`;
  return flagCard;
}
