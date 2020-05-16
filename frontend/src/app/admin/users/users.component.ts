import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {HttpClientService} from "../../service/http-client.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;

  constructor(private httpClientService: HttpClientService) {
  }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.users = new Array<User>();

    const user1 = new User();
    user1.id = 1;
    user1.name = 'user1';
    user1.type = 'admin';
    user1.password = 'pass';

    const user2 = new User();
    user2.id = 2;
    user2.name = 'user2';
    user2.type = 'user';
    user2.password = 'pass';

    this.users.push(user1);
    this.users.push(user2);
  }

  handleSuccessfulResponse(response) {
    this.users = response;
  }
}
