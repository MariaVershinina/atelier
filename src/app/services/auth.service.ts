import { Injectable } from '@angular/core';
import { User } from "./../models";
import {UsersService} from "../services/users.service"
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter"
import * as _ from 'underscore';

@Injectable()
export class AuthService {
 public currentUser:User;

 constructor(private _usersService: UsersService) { }
  
 public login(email: string, password: string) {
  this._usersService.users.map((users)=>users.filter((user)=>user.email === email.toLowerCase() && user.password === password))
                            .subscribe((users)=>{this.currentUser=users[0]});
  if(this.currentUser) {
     localStorage.setItem ("currentuser", JSON.stringify(this.currentUser));
     this._usersService.addCurrentUser();
     return true;
  }
  else{ return false}
 }

 public isLogged():boolean{
  if(localStorage.getItem("currentuser")){
      return true;  
  }
  return false;
 }


 public isLoggedIn():boolean{
     if(localStorage.getItem("currentuser")){
           return true;  
      }
      return false;
 }

 public isLoggedOut():boolean{
    localStorage.removeItem("currentuser");
    return false;
 }

}