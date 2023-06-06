const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

// Проходимо по кожному елементу масиву ingredients
ingredients.forEach((ingredient) => {
  // Створюємо новий елемент <li>
  const li = document.createElement("li");

  // Додаємо назву інгредієнта як текстовий вміст
  li.textContent = ingredient;

  // Додаємо клас "item" до елементу <li>
  li.classList.add("item");

  // Вставляємо елемент <li> у список ul#ingredients
  ul.appendChild(li);
});
