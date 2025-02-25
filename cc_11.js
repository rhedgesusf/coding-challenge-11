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
        return `Title: ${this.title}, Author: ${this.author}, ISBN: $${this.isbn}, Copies: ${this.copies}`;
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
