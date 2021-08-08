const categoriesContainer = document.createElement("div");
categoriesContainer.classList.add("container", "categories-container");

// allWrapper.appendChild(categoriesContainer);

async function getCategories() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const data = await response.json();
  return data.categories;
}

getCategories().then(displayCat);

function displayCat(categories) {
  categoriesContainer.innerHTML = getCategoriesHtml(categories);

  // console.log(categories);
}

function getCategoryHtml(category) {
  let backgroundImage = `url(${category.strCategoryThumb})`;
  let categoryHtml = `
    <a href="#">
      <div class="category-item" style="background-image:${
        category.strCategory === "Chicken"
          ? `url(./img/chicken-food.jpg)`
          : backgroundImage
      }">
        <div class="category-fader"></div>
        <h3 class="category-title">${category.strCategory}</h3>
      </div>
    </a>
    `;
  return categoryHtml;
}

function getCategoriesHtml(categories) {
  let categoriesHtml = `
    <h2 class="section-title">Categories</h2>
    <div class="categories-grid-container">
      ${categories
        .map((category) => {
          return getCategoryHtml(category);
        })
        .join("")}
    </div>
  `;
  return categoriesHtml;
}
allWrapper.appendChild(categoriesContainer);
// const categoriesButton = document.getElementById("categories");
// categoriesButton.addEventListener("click", () => {

// });
