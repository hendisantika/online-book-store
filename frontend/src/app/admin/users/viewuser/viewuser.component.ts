import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../model/user";
import {Router} from "@angular/router";
import {HttpClientService} from "../../../service/http-client.service";

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  @Input()
  user: User

  @Output()
  userDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
              private router: Router) {
  }

  ngOnInit() {
  }

  deleteUser() {
    this.httpClientService.deleteUser(this.user.id).subscribe(
      (user) => {
        this.userDeletedEvent.emit();
        this.router.navigate(['admin', 'users']);
      }
    );
  }
}
