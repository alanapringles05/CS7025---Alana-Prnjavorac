let shoppingList = ['milk', 'bread', 'butter', 'eggs', 'salt'];

//Function to display the 2nd and 3rd items
function displayItems() {
  console.log("second item:", shoppingList[1]);
  console.log("third item:", shoppingList[2]);
}

//Function to add a new item to the list
function addItem(item) {
  shoppingList.push(item);
  console.log(item + "has been added to the list");
}

//function to check if a specific item is in the list
function checkItem(item) {
  if (shoppingList.includes(item)) {
    console.log(item + "is in the shopping list.");
  }
  else{
    console.log(item + "is not int he shopping list.")
  }
}

// Examples
displayItems();
addItem();
checkItem();
