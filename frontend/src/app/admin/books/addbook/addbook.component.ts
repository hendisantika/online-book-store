import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../model/book";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  @Input()
  book: Book;

  constructor() {
  }

  ngOnInit() {
  }

}
