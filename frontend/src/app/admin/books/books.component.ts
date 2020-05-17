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
  selectedBook: Book;
  action: string;

  constructor(private httpClientService: HttpClientService, private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );
  }

  refreshData() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.books = response;
  }

  addBook() {
    this.selectedBook = new Book();
    this.router.navigate(['admin', 'books'], {queryParams: {action: 'add'}});
  }

}
