
function createRestaurant(restaurantName) {
var newRestaurant = {
  name: restaurantName,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  }
}
return newRestaurant;
};

function addMenuItem(restaurantName, menuItem) {
 //restaurantName= object   menuItem= object
  var lunchMenu = restaurantName.menus.lunch;
  var breakfastMenu = restaurantName.menus.breakfast;
  var dinnerMenu = restaurantName.menus.dinner;
  var allMeals = lunchMenu.concat(breakfastMenu, dinnerMenu);

  for (var i = 0; i < allMeals.length; i++){
    if (allMeals.includes(menuItem)) {
      return
    }
  } 
  if (menuItem.type === 'lunch') {
    lunchMenu.push(menuItem)
  } else if (menuItem.type === 'breakfast') {
    breakfastMenu.push(menuItem);
  } else if (menuItem.type === 'dinner') {
    dinnerMenu.push(menuItem);
  }
 };


function removeMenuItem(restaurantName, menuItemName, menuItemType) {
  var itemDetails = restaurantName.menus[menuItemType]
  
   for (var i = 0; i < itemDetails.length; i++) {
    if (itemDetails[i].name === menuItemName) {
    itemDetails.splice([i], 1)
    return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`
    } 
  } 
  return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!` 
};

module.exports = {
   createRestaurant, 
   addMenuItem,
   removeMenuItem
}