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

let bookcase = document.getElementById("bookcase");

function displayBookery() {
  for (let i = 0; i < bookery.length; i++) {
    bookcase.appendChild(document.createElement("div")).innerHTML = bookery[i].info();
  }
}

let gatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 129, 'yes')
let sunAlso = new Book('The Sun Also Rises', 'Ernest Hemingway', 259, 'no')
appendToBookery(gatsby)
appendToBookery(sunAlso)
displayBookery()

// Need a button that brings up a form that allows users to enter
// info about a new book
let fresh = document.getElementById('new-book-button');
fresh.onclick = displayBookeryForm()

function displayBookeryForm() {

}

function stealUserBookIdeas() {
  let title = document.getElementById("new-book-title");
  let author = document.getElementById("new-book-author");
  let pages = document.getElementById("new-book-pages");
  let read = document.getElementById("new-book-read");
  return { title, author, pages, read }
}
