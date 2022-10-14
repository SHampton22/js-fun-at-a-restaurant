function nameMenuItem(menuItemName) {
//adds the word 'Delicious' in front of the parameter, when runing in an argument.
  return `Delicious ${menuItemName}`
};

function createMenuItem() {
return menuItem = {
  name: "Delicious French Toast",
  price: 10.99,
  type: "breakfast"
};

};

function addIngredients(toppings, ingredientList) {
  if (!ingredientList.includes(toppings)) {
  return ingredientList.push(toppings);
  }
};







module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


