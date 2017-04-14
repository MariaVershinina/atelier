import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-myitems',
  templateUrl: './myitems.component.html',
  styleUrls: ['./myitems.component.css']
})
export class MyitemsComponent implements OnInit {

public items;

  constructor(private _usersService: UsersService){
    this._usersService.currentuser.subscribe(user=>{this.items = user.items;});
  }


  ngOnInit() {
  }

}
