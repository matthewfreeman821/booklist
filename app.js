//Book Class (represents a book)
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//UI Class (handles UI tasks)
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'John Doe',
        isbn: '345687920'
      },
      {
        title: 'Book Two',
        author: 'Jane Doe',
        isbn: '984058302830'
      }
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  
}
//Store Class (handles storage)

//Event to display books

//Event to add a book

//Event to remove a book