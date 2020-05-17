import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../../model/book";
import {HttpClientService} from "../../../service/http-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  @Input()
  book: Book;

  @Output()
  bookDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router) {
  }

  ngOnInit() {
  }

  deleteBook() {
    this.httpClientService.deleteBook(this.book.id).subscribe(
      (book) => {
        this.bookDeletedEvent.emit();
        this.router.navigate(['admin', 'books']);
      }
    );
  }
}
