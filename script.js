let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
}

function addBookToLibrary() {

}

const book1 = new Book('La Odisea', 'anonymus', 243, 'not read')
console.log(book1.info());