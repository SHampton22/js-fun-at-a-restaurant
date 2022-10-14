function nameMenuItem(menuItemName) {
//adds the word 'Delicious' in front of the parameter, when runing in an argument.
  return `Delicious ${menuItemName}`
};

function createMenuItem(name, price, food)  {
return menuItem = {
  name: name,
  price: price,
  type: food
};

};

function addIngredients(toppings, ingredientList) {
  if (!ingredientList.includes(toppings)) {
  return ingredientList.push(toppings);
  }
};


function formatPrice(basicNumber) {
//when an argument is passed the $ is added to the front
//for every price in the menuItem, add $ to the front.
var newPrice = `$${basicNumber}`;
return newPrice;
  
};

function decreasePrice(newPrice) {
  return newPrice *= 1 - .10

};

function createRecipe(recipeTitle, recipeIngredients, mealType) {
return recipe = {
  title: recipeTitle,
  ingredients: recipeIngredients,
  type: mealType
}
};



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


