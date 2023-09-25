type Book = {
    title: string;
    author: string;
    publicationYear: number;
  };

  function promptForBook(): Book {
    const bookTitle = prompt("Enter the book's title:");
    const bookAuthor = prompt("Enter the author's name:");
    const publicationYearInput = prompt("Enter the publication year:");
    const bookPublicationYear = parseInt(publicationYearInput);
    const book: Book = {
      title: bookTitle,
      author: bookAuthor,
      publicationYear: bookPublicationYear,
    };

    return book;
  }

  const bookDetails = promptForBook();

  console.log("Book Details:");
  console.log(`Title: ${bookDetails.title}`);
  console.log(`Author: ${bookDetails.author}`);
  console.log(`Publication Year: ${bookDetails.publicationYear}`);
