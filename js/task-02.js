const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = [];

for (let i = 0; i < ingredients.length; i++) {
  const newItem = document.createElement("li");
  newItem.innerText =ingredients[i];
  listItems.push(newItem);
}

console.log(listItems);