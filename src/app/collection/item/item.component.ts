import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Shirt } from "../../models";
import {AddService} from "../../services/add.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input() item:Shirt;
 public currentuser:string;

  constructor(private _addService: AddService) { }
 
  public addItem(){
    this._addService.addInCart(this.item);
  }
  
 ngOnInit() {}
 ngDoCheck(){ this.currentuser = localStorage.getItem("currentuser");}

}
