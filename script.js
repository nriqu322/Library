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
  render(myLibrary);
}

function render(library) {

  document.querySelector('.library-list').innerHTML = "";

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

const book1 = new Book('La Odisea', 'anonymus', 243, true);
const book2 = new Book('Test book', 'Test author', 501, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
// render(myLibrary);

document.getElementById('book-form').onsubmit = function () {
  console.log('Works') ;

  const title = document.getElementById('input-title').value;
  const author = document.getElementById('input-author').value;
  const pages = document.getElementById('input-pages').value;
  const read = document.getElementById('input-read').checked;

  const newBook = new Book(title, author, pages, read);

  addBookToLibrary(newBook);
  
  console.log(newBook);
  return false;
}

// document.getElementById('btn').addEventListener('click', createBook);

/*
function myFunction() {
  document.getElementById("demo").innerHTML = "You Clicked";
}

document.getElementById("demo").addEventListener("click", myFunction);
*/



