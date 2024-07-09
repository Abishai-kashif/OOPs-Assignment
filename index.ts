// a class called Book
class Book {
	static totalBooks: number = 0; // class variable to keep track of total books

	// a constructor that initializes title and author
	constructor(public title: string, public author: string) {
		Book.totalBooks++;
	}

	// a method in class that prints title and author
	print() {
		console.log(`${this.title} is written by ${this.author}.`);
	}

	// a method to display total instances
	static displayTotalInstances(): void {
		console.log(`Total instances of Book: ${Book.totalBooks}`);
	}
}

// two instances of the Book class
const myBook = new Book("The Catcher in the Rye", "J.D. Salinger");
const anotherBook = new Book("To Kill a Mockingbird", "Harper Lee");

// calling static method
Book.displayTotalInstances();

// a class that inherits from Book
class EBook extends Book {
	constructor(
		public title: string,
		public author: string,
		public fileSize: number
	) {
		super(title, author);
	}

	// method overriding
	print() {
		console.log(
			`Title: ${this.title}, Author: ${this.author}, File Size: ${this.fileSize}.`
		);
	}
}

const myEbook = new EBook("The Catcher in the Rye", "J.D. Salinger", 500);

// calling method on each instances

// polymorphism
[myBook, anotherBook, myEbook].forEach((book: Book) => book.print());
