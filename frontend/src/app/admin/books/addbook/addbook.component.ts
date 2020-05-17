import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../model/book";
import {HttpClientService} from "../../../service/http-client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  @Input()
  book: Book;
  imgURL: any;
  private selectedFile;

  constructor(private httpClientService: HttpClientService,
              private activedRoute: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveBook() {

    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8080/books/upload', uploadData, {observe: 'response'})
      .subscribe((response) => {
          if (response.status === 200) {
            this.httpClientService.addBook(this.book).subscribe(
              (book) => {
                this.router.navigate(['admin', 'books']);
              }
            );
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
      );
  }
}
