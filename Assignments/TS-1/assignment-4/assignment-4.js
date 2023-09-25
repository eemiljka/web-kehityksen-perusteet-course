function createElectronicDevice() {
  var brand = prompt("Enter the electronic device's brand:");
  var model = prompt("Enter the electronic device's model:");
  return {type: 'electronic', brand: brand, model: model};
}
function createBook() {
  var title = prompt("Enter the book's title:");
  var author = prompt("Enter the book's author:");
  return {type: 'book', title: title, author: author};
}
var electronicProduct = createElectronicDevice();
var bookProduct = createBook();
function displayProductDetails(product) {
  console.log('Product Type: '.concat(product.type));
  if (product.type === 'electronic') {
    console.log('Brand: '.concat(product.brand));
    console.log('Model: '.concat(product.model));
  } else {
    console.log('Title: '.concat(product.title));
    console.log('Author: '.concat(product.author));
  }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
