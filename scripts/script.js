let bookery = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  }
}

function appendToBookery(book) {
  bookery.push(book);
}

function displayBookery() {
  // Eventually display this in viewport, not console
  for (let i = 0; i < bookery.length; i++) {
    console.log(bookery[i])
  }
}

let gatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 129, 'yes')
let sunAlso = new Book('The Sun Also Rises', 'Ernest Hemingway', 259, 'no')
appendToBookery(gatsby)
appendToBookery(sunAlso)
displayBookery()
