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

let statusButtons = [];
let deleteButtons = [];

function render() {
    document.getElementById('content').innerHTML = '';
    myLibrary.forEach(book => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'border', 'border-black', 'p-4', 'm-4', 'rounded-md', 'bg-gray-200', 'w-1/4');
        newDiv.innerHTML = `
        <p>${book.author}</p>
        <p>${book.title}</p>
        <p>${book.pages} pages</p>
        <p>${book.read}</p>
        <div class="flex  justify-between w-full">
        <button id="${book.title}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Change status</button>
        <button id="${book.title} delete" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </div>
        `;
        document.getElementById('content').appendChild(newDiv);
        let statusButton = document.getElementById(book.title);
        document.getElementById(book.title).addEventListener('click', changeStatus);
        statusButtons.push(statusButton);

        let deleteButton = document.getElementById(book.title);
        document.getElementById(book.title+" delete").addEventListener('click', deleteBook);
        deleteButtons.push(deleteButton);
    });
}

function changeStatus(event) {
    let bookTitle = event.target.id;
    let book = myLibrary.find(book => book.title === bookTitle);
    if (book.read === 'read') {
        book.read = 'not read yet';
    } else {
        book.read = 'read';
    }
    event.target.parentElement.previousElementSibling.textContent = book.read;
}

function deleteBook(event) {
    let bookTitle = event.target.id;
    let book = myLibrary.find(book => book.title === bookTitle);
    let bookIndex = myLibrary.indexOf(book);
    myLibrary.splice(bookIndex, 1); 
    event.target.parentElement.parentElement.remove();
}


const submitButton  = addEventListener('submit', submitForm);

function submitForm (event) {
    event.preventDefault();
    let author = document.getElementById('name').value;
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
    render();

    document.getElementById('closeModal').click();
    
}