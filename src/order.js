
function takeOrder(incomingOrder, listOfOrders) {
  //when an oder is passed in it will be added to the list of orders.
  //incomingOrder=object, listOfOrders=array
 if (listOfOrders.length <= 2) { 
//If the length of the array doesn't already have 3 orders
  var currentOrders = listOfOrders.push(incomingOrder)
 } 
return currentOrders;
};

function refundOrder(orderNumToRefund, currentDeliveries) {
 //when an order is passed in to the first parameter, the for loop will check each index of the 
 //currentDeliveries array and remove the one that matches allOrderNumbers. 
for (var i = 0; i < currentDeliveries.length; i++) {
//accessing the array with a for loop, then using dot.notation to access the value of the key orderNumber:
// for all objects in the array and asigning a variable.  
  var allOrderNumbers = currentDeliveries[i].orderNumber;
//Checking to see if the order number in the argument matches the value of the key orderNumber:
// and if it does, using the .splice() method to remove the entire order object from the currentDeliveries array.
  if (orderNumToRefund === allOrderNumbers) {
    var ordersReady = currentDeliveries.splice([i],1)
    return ordersReady;
  }
}
};


function listItems(ordersReady) {
var myItems = [];
for (var  i = 0; i < ordersReady.length; i++) {
  var foodNames = ordersReady[i].item;
  myItems.push(foodNames);
  
}
return myItems.join(", ");
};


function searchOrder(deliveryOrders, foodType) {
 for (var i = 0; i < deliveryOrders.length; i++) {
  if ( deliveryOrders[i].item === foodType) {
    return true;
  }
 }
 return false;
}





module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}