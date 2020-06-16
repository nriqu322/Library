let myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBookToLibrary(obj) {
  myLibrary.push(obj);
  render(myLibrary);
}

Book.prototype.changeReadBook = function () {
  if (this.read === true) {
    this.read = false;
  } else {
    this.read = true;
  }
}

function render(library) {

  document.querySelector('.library-list').innerHTML = "";

  for (let i = 0; i < library.length; i++) {
    const book = document.createElement('div');
    book.classList.add('book', 'col-8','col-md-5', 'col-lg-3','mx-auto', 'my-2', 'text-center', 'border', 'border-secondary', 'rounded');

    let bookTitle = document.createElement('div');
    bookTitle.classList.add('book-title', 'font-weight-bold', 'my-2');
    bookTitle.innerHTML = library[i].title;
    book.appendChild(bookTitle);

    let bookAuthor = document.createElement('div');
    bookAuthor.classList.add('book-author');
    bookAuthor.innerHTML = `Author: ${library[i].author}`;
    book.appendChild(bookAuthor);

    let bookPages = document.createElement('div');
    bookPages.classList.add('book-pages');
    bookPages.innerHTML = `Pages: ${library[i].pages}`;
    book.appendChild(bookPages);

    let bookRead = document.createElement('div');
    bookRead.classList.add('book-read');
    if (library[i].read == true) {
      bookRead.innerHTML = 'Read: Yes';
      bookRead.classList.add('text-success');
    } else {
      bookRead.innerHTML = "Read: No";
      bookRead.classList.add('text-danger');
    }
    book.appendChild(bookRead);

    book.id = i;
    const libraryList = document.querySelector('.library-list');
    libraryList.appendChild(book);

    const changeStatus = document.createElement('button');
    changeStatus.classList.add('change-status','btn', 'btn-warning', 'col-10');
    changeStatus.id = `book-status-${i}`;
    changeStatus.innerHTML = 'Change Status';
    book.appendChild(changeStatus);
    document.getElementById(`book-status-${i}`).addEventListener('click', () => {
      myLibrary[i].changeReadBook();
      render(myLibrary);
    });

    const deleteBook = document.createElement('button');
    deleteBook.classList.add('delete-button', 'btn-danger', 'btn', 'my-2', 'col-8');
    deleteBook.id = `book-${i}`;
    deleteBook.innerHTML = 'Delete';
    book.appendChild(deleteBook);
    document.getElementById(`book-${i}`).addEventListener('click', () => {
      myLibrary.splice(i, 1);
      render(myLibrary);
    });
  }
}

const book1 = new Book('La Odisea', 'anonymus', 243, true);
const book2 = new Book('Test book', 'Test author', 501, false);
const book3 = new Book('Test book2', 'Test author2', 501, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
// render(myLibrary);

document.getElementById('book-form').onsubmit = function () {
  console.log('Works') ;

  const title = document.getElementById('input-title').value;
  const author = document.getElementById('input-author').value;
  const pages = document.getElementById('input-pages').value;
  const read = document.getElementById('input-read').checked;

  const newBook = new Book(title, author, pages, read);

  addBookToLibrary(newBook);
  document.getElementById("book-form").reset();
  return false;
}
