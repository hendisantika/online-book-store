import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../model/user";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  @Input()
  user: User

  constructor() {
  }

  ngOnInit() {
  }

}
