let myLibrary = []

render(<p>Hello</p>, document.getElementById('books'));

function Book(title, author, pages, read = false, data) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.data = data
  this.check = function () {
    if(read == true){
      return 'read';
    } else {
      return "didn't read yet"
    }
    }
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${this.check()}`
  }
}

function addBookToLibrary(obj) {
  myLibrary.push(obj);
}


let tag_id = document.getElementById('books');
tag_id.innerHTML('HTML string');

// const book1 = new Book('La Odisea', 'anonymus', 243, 'not read')
// console.log(book1.info());
