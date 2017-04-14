import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {AddService} from "../../services/add.service";
import {User } from "../../models";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
public user:User;
public data =false;
public size =false;

   constructor(private _usersService: UsersService, private _addService: AddService){
    this._usersService.currentuser.subscribe(user=>{this.user = user});
   }

    changeData(e){
      this.data=!this.data;
      this._addService.changeUser()
    }
    changeSize(e){
      this.size=!this.size;
      this._addService.changeUser()
    }

  ngOnInit() {
  }

}
