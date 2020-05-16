import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<Book>;

  constructor() {
  }

  ngOnInit() {

    this.books = new Array<Book>();

    const book1 = new Book();
    book1.id = 1;
    book1.name = 'book1';
    book1.author = 'author1';
    book1.price = 5;

    const book2 = new Book();
    book2.id = 2;
    book2.name = 'book2';
    book2.author = 'author2';
    book2.price = 15;

    this.books.push(book1);
    this.books.push(book2);
  }

}
