"use strict";
// a class called Book
class Book {
    title;
    author;
    static totalBooks = 0; // class variable to keep track of total books
    // a constructor that initializes title and author
    constructor(title, author) {
        this.title = title;
        this.author = author;
        Book.totalBooks++;
    }
    // a method in class that prints title and author
    print() {
        console.log(`${this.title} is written by ${this.author}.`);
    }
    // a method to display total instances
    static displayTotalInstances() {
        console.log(`Total instances of Book: ${Book.totalBooks}`);
    }
}
// two instances of the Book class
const myBook = new Book("The Catcher in the Rye", "J.D. Salinger");
const anotherBook = new Book("To Kill a Mockingbird", "Harper Lee");
// calling method on each instance
myBook.print();
anotherBook.print();
// calling static method
Book.displayTotalInstances();
// a class that inherits from Book
class EBook extends Book {
    title;
    author;
    fileSize;
    constructor(title, author, fileSize) {
        super(title, author);
        this.title = title;
        this.author = author;
        this.fileSize = fileSize;
    }
    // method overriding
    print() {
        console.log(`Title: ${this.title}, Author: ${this.author}, File Size: ${this.fileSize}.`);
    }
}
const myEbook = new EBook("The Catcher in the Rye", "J.D. Salinger", 500);
myEbook.print();
