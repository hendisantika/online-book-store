import {Component, OnInit} from '@angular/core';
import {Book} from "../model/book";
import {Router} from "@angular/router";
import {HttpClientService} from "../service/http-client.service";

@Component({
  selector: 'app-shopbook',
  templateUrl: './shopbook.component.html',
  styleUrls: ['./shopbook.component.css']
})
export class ShopbookComponent implements OnInit {

  books: Array<Book>;
  booksRecieved: Array<Book>;

  constructor(private router: Router, private httpClientService: HttpClientService) {
  }


  ngOnInit() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  // we will be taking the books response returned from the database
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

}
