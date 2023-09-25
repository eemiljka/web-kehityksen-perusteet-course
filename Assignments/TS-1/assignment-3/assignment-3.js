function promptForBook() {
  var bookTitle = prompt("Enter the book's title:");
  var bookAuthor = prompt("Enter the author's name:");
  var publicationYearInput = prompt('Enter the publication year:');
  var bookPublicationYear = parseInt(publicationYearInput);
  var book = {
    title: bookTitle,
    author: bookAuthor,
    publicationYear: bookPublicationYear,
  };
  return book;
}
var bookDetails = promptForBook();
console.log('Book Details:');
console.log('Title: '.concat(bookDetails.title));
console.log('Author: '.concat(bookDetails.author));
console.log('Publication Year: '.concat(bookDetails.publicationYear));
