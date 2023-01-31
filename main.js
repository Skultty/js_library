let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary(author, title, pages, read) {
    let book = new Book(author, title, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('J. R. R. Tolkien', 'The Hobbit', 295, 'not read yet');
addBookToLibrary('J. R. R. Tolkien', 'The Lord of the Rings', 1216, 'read');
addBookToLibrary('J. R. R. Tolkien', 'The Silmarillion', 480, 'not read yet');
addBookToLibrary('J. R. R. Tolkien', 'The Children of Hurin', 352, 'not read yet');
addBookToLibrary('J. R. R. Tolkien', 'The Fall of Gondolin', 224, 'not read yet');

myLibrary.forEach(book => {
    // Create a new div element
    let newDiv = document.createElement('div');
    // Add a class to the div
    newDiv.classList.add('book');
    // Add the div to the content div
    document.getElementById('content').appendChild(newDiv);
    // Create a new paragraph element
    let newP = document.createElement('p');
    // Add the book info to the paragraph
    newP.textContent = book.info();
    // Add the paragraph to the div
    newDiv.appendChild(newP);
});

const submitButton  = addEventListener('submit', checkInput);

function submitForm () {
    let author = document.getElementById('author').value;
    let title = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    console.log(author, title, pages, read);
    
    if (read) {
        read = 'read';
    } else {
        read = 'not read yet';
    }

    addBookToLibrary(author, title, pages, read);
    let newDiv = document.createElement('div');
    newDiv.classList.add('book');
    document.getElementById('content').appendChild(newDiv);
    let newP = document.createElement('p');
    newP.textContent = `${title} by ${author}, ${pages} pages, ${read}`;
    newDiv.appendChild(newP);
}

function checkInput(event) {
    event.preventDefault();
    let author = document.getElementById('author').value;
    let title = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;

    if (author === '' || title === '' || pages === '') {
        alert('Please fill in all fields');
    } else {
        submitForm();
    }
}