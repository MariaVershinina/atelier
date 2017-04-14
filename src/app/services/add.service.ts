import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from "./../models";
import { Order } from "./../models";
import { Shirt } from "./../models";
import {UsersService} from "../services/users.service";
import {AuthService} from "../services/auth.service";
import "rxjs/add/operator/map"
import * as _ from 'underscore';

@Injectable()
export class AddService {
  public currentuser:User;
  public users:User[];


   constructor(private _usersService: UsersService){
    this._usersService.users.subscribe( (users) => this.users = users  );
    this._usersService.currentuser.subscribe( (currentuser) => this.currentuser = currentuser)
    }


  addInCart(shirt:Shirt){
    let order = this.createOrder(shirt);
    this.currentuser.cart.push(order);
    this.users.map((user)=>{if(user.email ===this.currentuser.email){user.cart.push(order)};return user});
    localStorage.setItem("currentuser",JSON.stringify(this.currentuser));
    localStorage.setItem("users",JSON.stringify(this.users)); 
    this._usersService.addUsers();
    this._usersService.addCurrentUser();
 }

createOrder(shirt:Shirt){
   let order: Order= new Order() ;
    order.id = Date.now();
    order.date = new Date();
    order.neck = this.currentuser.neck;
    order.chest= this.currentuser.chest;
    order.thigh = this.currentuser.thigh;
    order.biceps = this.currentuser.biceps;
    order.wrist= this.currentuser.wrist;
    order.shirt = shirt;
    return order;
  
  }

  deleteCart(order:Order){
    this.currentuser.cart = this.currentuser.cart.filter((ordercart)=> ordercart.id !== order.id );
    this.users = this.users.map((user)=>{if(user.email ===this.currentuser.email){user.cart = user.cart.filter((ordercart)=> ordercart.id !== order.id )};return user});
    localStorage.setItem("currentuser",JSON.stringify(this.currentuser));
    localStorage.setItem("users",JSON.stringify(this.users)); 
    this._usersService.addUsers();
    this._usersService.addCurrentUser();
 }
 buyCart(orders:Order[]){

   this.currentuser.cart.forEach((order)=>this.currentuser.items.push(order));
   this.currentuser.cart=[];
   this.users.map((user)=>{if(user.email ===this.currentuser.email){user.cart.forEach((order)=>user.items.push(order));user.cart = [] };return user});
    localStorage.setItem("currentuser",JSON.stringify(this.currentuser));
    localStorage.setItem("users",JSON.stringify(this.users)); 
    this._usersService.addUsers();
    this._usersService.addCurrentUser();
}
 changeUser(){
    let users = this.users.map((user)=>{if(user.email ===this.currentuser.email){user=this.currentuser;};return user});
    localStorage.setItem("currentuser",JSON.stringify(this.currentuser));
    localStorage.setItem("users",JSON.stringify(users)); 
    this._usersService.addUsers();
}
 addNewUser(user){
    user.email = user.email.toLowerCase();
    this.users.push(user);
    localStorage.setItem("users",JSON.stringify(this.users)); 
    this._usersService.addUsers();
}

 changeOrderSize(){
    let users = this.users.map((user)=>{if(user.email ===this.currentuser.email){user=this.currentuser;};return user});
    localStorage.setItem("currentuser",JSON.stringify(this.currentuser));
    localStorage.setItem("users",JSON.stringify(users)); 
    this._usersService.addUsers();

}

clearCart(){
    this.currentuser.cart = [];
    this.users = this.users.map((user)=>{if(user.email ===this.currentuser.email){user.cart = []};return user});
    localStorage.setItem("currentuser",JSON.stringify(this.currentuser));
    localStorage.setItem("users",JSON.stringify(this.users)); 
    this._usersService.addUsers();
    this._usersService.addCurrentUser();
 }
}