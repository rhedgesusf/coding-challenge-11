///////////////////////////////////
// Task 1: Creating a Book Class //
///////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Creating a Book Class");

class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        if (this.copies + quantity < 0){
            console.log("Cannot have negative copies");
        }
        else {
            this.copies += quantity;
        }
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());

book1.updateCopies(-1);
console.log(book1.getDetails());

///////////////////////////////////////
// Task 2: Creating a Borrower Class //
///////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Creating a Borrower Class");

class Borrower {
    constructor(name, borrowerId) {
        this.name = name
        this.borrowerId = borrowerId
        this.borrowedBooks = []
    }
    
    borrowBook(book) {
        this.borrowedBooks.push(book)
    }
    returnBook(book) {
        let index = this.borrowedBooks.findIndex((element) => element === book);

        if (index == -1){
            console.log("Book Not Found");
        }
        else {
           this.borrowedBooks.splice(index, 1);
        }
    }
}

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

//////////////////////////////////////
// Task 3: Creating a Library Class //
//////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Creating a Library Class");

class Library {
    constructor() {
        this.books = []
        this.borrowers = []
    }
    addBook(book) {
        this.books.push(book)
    }

    addBorrower(borrower) {
        this.borrowers.push(borrower)
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

    lendBook(borrowerId, isbn) {
        let index = this.books.findIndex((element) => element.isbn === isbn);

        console.log(index);

        if (index == -1){
            console.log("Book Not Found");
        }
        else if(this.books[index].copies <= 0) {
           console.log("No Copies Available");
        }
        else {
            let borrowerIndex = this.borrowers.findIndex((element) => element.borrowerId === borrowerId);
            if (borrowerIndex == -1) {
                console.log("Borrower Not In Library")
            }
            else {
                this.books[index].copies--;
                this.borrowers[borrowerIndex].borrowBook(this.books[index].title);
            }
        }
    }

    returnBook(borrowerId, isbn) {
        let bookIndex = this.books.findIndex((element) => element.isbn === isbn);
        let borrowerIndex = this.borrowers.findIndex((element) => element.borrowerId === borrowerId);
        console.log(bookIndex);

        if (bookIndex == -1){
            console.log("Book Not Found In Library");
        }
        else if (borrowerIndex == -1) {
            console.log("Borrower Not Found In Library")
        }
        else {
            this.books[bookIndex].copies++;
            this.borrowers[borrowerIndex].returnBook(this.books[bookIndex].title);
        }
    }

}

const library = new Library();
library.addBook(book1);
library.addBorrower(borrower1)
library.listBooks();

/////////////////////////////////////////
// Task 4: Implementing Book Borrowing //
/////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Implementing Book Borrowing");

// Added lendBook method to Library class

library.lendBook(201, 123456);
console.log(book1.getDetails());

console.log(borrower1.borrowedBooks);

///////////////////////////////////////
// Task 5: Implementing Book Returns //
///////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Implementing Book Returns");

// Added returnBook method to Library Class

library.returnBook(201, 123456);
console.log(book1.getDetails());

console.log(borrower1.borrowedBooks);