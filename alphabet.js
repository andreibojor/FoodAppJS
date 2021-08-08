// ALPHABET Section

// <div class="container alphabet-container"></div>
// <div class="container meal-card-results-container"></div>

const alphabetContainer = document.createElement("div");
alphabetContainer.classList.add("container", "alphabet-container");
allWrapper.appendChild(alphabetContainer);

const mealCardResultsContainer = document.createElement("div");
mealCardResultsContainer.classList.add(
  "container",
  "meal-card-results-container"
);
allWrapper.appendChild(mealCardResultsContainer);

// Alphabet Button HTML
function getAlphabetButtonHtml(letter) {
  let alphabetButton = `<button class="letter-btn" value="${letter}">${letter}</button>`;
  return alphabetButton;
}

// Add HTML Button to every letter in the alphabet
function getAlphabetButtonsHtml() {
  let alphabetButtons = [];
  for (i = 0; i < 26; i++) {
    letter = String.fromCharCode(i + 65);
    alphabetButtons.push(getAlphabetButtonHtml(letter));
  }
  return alphabetButtons;
}

function displayAlphabetButtons() {
  alphabetContainer.innerHTML = `
    <h2 class="section-title">Browse by name:</h2>
    <div class="alphabet-buttons">
      ${getAlphabetButtonsHtml().join("")}
    </div>`;
}

displayAlphabetButtons();

// DISPLAY ALPHABET RESULTS
const letterButtons = document.querySelectorAll(".letter-btn");

// letterButtons is a HTML Collection. Add eventListener with forEach
letterButtons.forEach((letter) => {
  letter.addEventListener("click", () => {
    //call getRecipeCards to fetch the results and display them
    getRecipeCards(letter.value).then(displayMealCards);
  });
});

async function getRecipeCards(letter) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  const data = await response.json();
  return data;
}
