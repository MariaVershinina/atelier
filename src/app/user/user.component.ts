import { Component, OnInit } from '@angular/core';
import { Shirt } from "../models";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user;

  constructor(private _usersService: UsersService){
    this._usersService.currentuser.subscribe(user=>{this.user = user});
  }
  ngOnInit() {
  }

}
