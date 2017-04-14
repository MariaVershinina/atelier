import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from "./../models";
import { Observable} from 'rxjs/Observable';
import {Subject} from "rxjs/Subject";
import * as Rx from 'rxjs';
import "rxjs/add/operator/map"
import  "rxjs/add/operator/publishReplay"

@Injectable()
export class UsersService {
   private _currentuser: Subject<any> = new Subject();
   public currentuser: Observable<any>;

   private _users: Subject<any> = new Subject();
   public users: Observable<any>;

   currentStorageChange(text) {
    this._currentuser.next(text);
   }

   usersStorageChange(text) {
    this._users.next(text);
   }
   
    constructor() { 
     this._currentuser.subscribe();
     this._users.subscribe();
     this.currentuser = this._currentuser.publishReplay(1).refCount(); //кеш
     this.users = this._users.publishReplay(1).refCount();//кеш
    } 

  addCurrentUser(){ this.currentStorageChange(JSON.parse(localStorage.getItem("currentuser")));}
  addUsers() {this.usersStorageChange(JSON.parse(localStorage.getItem("users")));}


}






