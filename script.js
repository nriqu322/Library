let myLibrary = [];

function Book(title, author, pages, read = false, data) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.data = data;
}

function addBookToLibrary(obj) {
  myLibrary.push(obj);
}

function render(library) {
  
  for (let i = 0; i < library.length; i++) {
    const book = document.createElement('div');
    book.classList.add('book');

    let bookTitle = document.createElement('div');
    bookTitle.classList.add('book-title');
    bookTitle.innerHTML = library[i].title;
    book.appendChild(bookTitle);

    let bookAuthor = document.createElement('div');
    bookAuthor.classList.add('book-author');
    bookAuthor.innerHTML = library[i].author;
    book.appendChild(bookAuthor);

    let bookPages = document.createElement('div');
    bookPages.classList.add('book-pages');
    bookPages.innerHTML = library[i].pages;
    book.appendChild(bookPages);

    let bookRead = document.createElement('div');
    bookRead.classList.add('book-read');
    if (library[i].read === true) {
      bookRead.innerHTML = 'Read';
    } else {
      bookRead.innerHTML = "didn't read yet";
    }
    bookRead.innerHTML = library[i].read;
    book.appendChild(bookRead);

    const libraryList = document.querySelector('.library-list');
    libraryList.appendChild(book);
  }
}

// let tag_id = document.getElementById('books');
// tag_id.innerHTML('HTML string');

const book1 = new Book('La Odisea', 'anonymus', 243, true);
const book2 = new Book('Test book', 'Test author', 501, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
render(myLibrary);