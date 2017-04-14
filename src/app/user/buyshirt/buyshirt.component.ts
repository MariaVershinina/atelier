import { Component, OnInit } from '@angular/core';
import {AddService} from "../../services/add.service";
import { Shirt } from "../../models";

@Component({
  selector: 'app-buyshirt',
  templateUrl: './buyshirt.component.html',
  styleUrls: ['./buyshirt.component.css']
})
export class BuyshirtComponent implements OnInit {
 public colores = [
    { value: 'белый', display: 'Белый' },
    { value: 'голубой', display: 'Голубой' },
    { value: 'красный', display: 'Красный' },
    { value: 'серый', display: 'Серый' }
  ];
  public textures = [
    { value: 'монохром', display: 'Монохром' },
    { value: 'клетка', display: 'Клетка' },
    { value: 'полоска', display: 'Полоска' },
    { value: 'паттерн', display: 'Паттерн' }
  ];
  public styles = [
    { value: 'стандартный', display: 'Стандартный' },
    { value: 'приталенный', display: 'Приталенный' },
  ];
  public collares = [
    { value: 'классический', display: 'Классический' },
    { value: 'итальянский', display: 'Итальянский' },
  ];
  public sleeves = [
    { value: 'длинный', display: 'Длинный' },
    { value: 'короткий', display: 'Короткий' }
   ];

   public shirt:Shirt = new Shirt;

   constructor(private _addService: AddService) {}
 
   public addItem(e){
    this.shirt.id = Date.now().toString();
    this.shirt.imageURL="../../../assets/img/shirt/default.png";
    this._addService.addInCart(this.shirt);
    this.shirt = new Shirt;
    }
    ngOnInit() {
    }

}
