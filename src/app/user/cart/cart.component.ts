import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import { Shirt } from "../../models";
import {AddService} from "../../services/add.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart;
  public message:boolean = false;
  public warning=0;

  constructor(private _usersService: UsersService,private _addService: AddService){
    this._usersService.currentuser.subscribe(user=>{this.cart = user.cart});
  }
  buyItem(){
    this._addService.buyCart(this.cart);
    this.message = true;
    setTimeout(function() {this.message = false;}.bind(this), 3000);
  }
  clearItem(event){
    this._addService.clearCart();
  }
  warn(count){
    this.warning=this.warning+count;
     }
  ngOnInit() {
  }

}
