import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import { Order } from "../../../models";
import {AddService} from "../../../services/add.service";
@Component({
  selector: 'app-itemcart',
  templateUrl: './itemcart.component.html',
  styleUrls: ['./itemcart.component.css']
})
export class ItemcartComponent implements OnInit {
 @Input() order:Order;
 @Output() warning = new EventEmitter();
 public size =false;
 
  constructor(private _addService: AddService){}

  change(){
    this.size=!this.size
    this.warning.emit(+1);
  }

  changeSize(event){
  this.size=!this.size;
  this._addService.changeOrderSize();
  this.warning.emit(-1);
} 

  deleteCart(order){
    this._addService.deleteCart(this.order);
  }
  
  ngOnInit() {
  }

}
