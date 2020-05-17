import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book";
import {HttpClientService} from "../../service/http-client.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<Book>;
  booksRecieved: Array<Book>;
  selectedBook: Book;
  action: string;

  constructor(private httpClientService: HttpClientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        // get the url parameter named action. this can either be add or view.
        this.action = params['action'];
        // get the parameter id. this will be the id of the book whose details
        // are to be displayed when action is view.
        const id = params['id'];
        // if id exists, convert it to integer and then retrive the book from
        // the books array
        if (id) {
          this.selectedBook = this.books.find(book => {
            return book.id === +id;
          });
        }
      }
    );
  }

  //we will be taking the books response returned from the database
  // and we will be adding the retrieved
  handleSuccessfulResponse(response) {
    this.books = new Array<Book>();
    //get books returned by the api call
    this.booksRecieved = response;
    for (const book of this.booksRecieved) {

      const bookwithRetrievedImageField = new Book();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.name = book.name;
      //populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.price = book.price;
      bookwithRetrievedImageField.picByte = book.picByte;
      this.books.push(bookwithRetrievedImageField);
    }
  }

  addBook() {
    this.selectedBook = new Book();
    this.router.navigate(['admin', 'books'], {queryParams: {action: 'add'}});
  }

  viewBook(id: number) {
    this.router.navigate(['admin', 'books'], {queryParams: {id, action: 'view'}});
  }
}
