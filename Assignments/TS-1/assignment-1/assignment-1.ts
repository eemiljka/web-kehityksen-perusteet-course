// Define the Item interface
interface Item {
    name: string;
    price: number;
    quantity: number;
  }

  // Create an empty array named 'cart' to store the items
  const cart: Item[] = [];

  // Implement a loop to prompt the user for item details
  // Use 'while' loop to keep prompting until an empty item name is entered
  while (true) {
    // Prompt user for item name
    const itemName = prompt("Enter item name:");

    // Break the loop if an empty item name is entered
    if (!itemName) {
      break;
    }

    // Prompt user for item price
    const itemPrice = parseFloat(prompt("Enter item price:"));

    // Prompt user for item quantity
    const itemQuantity = parseFloat(prompt("Enter item quantity:"));

    // Create an item object and add it to the 'cart' array
    const newItem: Item = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
  }

  // Calculate the total cost using the 'map' and 'reduce' functions
  const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);

  // Display the total cost to the user
  console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
