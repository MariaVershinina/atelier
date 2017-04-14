import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Shirt } from "./../models";
import {ShirtService} from "../services/shirt.service"
import * as _ from 'underscore';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  public collection:Shirt[];
  public sortObject = { 
  color:"любой",
  texture:"любой",
  style:"любой",
  collar:"любой",
  sleeve:"любой",
  name:"любой"
};
  public names;
  public colores = [
    { value: 'любой', display: 'любой' },
    { value: 'белый', display: 'Белый' },
    { value: 'голубой', display: 'Голубой' },
    { value: 'красный', display: 'Красный' },
    { value: 'серый', display: 'Серый' }
  ];
  public textures = [
    { value: 'любой', display: 'любой' },
    { value: 'однотонная', display: 'Однотонная' },
    { value: 'клетка', display: 'Клетка' },
    { value: 'полоска', display: 'Полоска' },
    { value: 'паттерн', display: 'Паттерн' }
  ];
  public styles = [
    { value: 'любой', display: 'любой' },
    { value: 'стандартный', display: 'Стандартный' },
    { value: 'приталенный', display: 'Приталенный' },
  ];
  public collares = [
    { value: 'любой', display: 'любой' },
    { value: 'классический', display: 'Классический' },
    { value: 'итальянский', display: 'Итальянский' },
  ];
  public sleeves = [
    { value: 'любой', display: 'любой' },
    { value: 'длинный', display: 'Длинный' },
    { value: 'короткий', display: 'Короткий' }
   ];
  
  constructor(private _shirtService: ShirtService) {
      _shirtService.shirt.subscribe((_shirts)=>{this.collection = _shirts;
                                                this.names= _.pluck(_shirts, 'name')
                                                 this.names.unshift("любой"); })//получение массива названий

 }
  reset(){
  this.sortObject = { 
  color:"любой",
  texture:"любой",
  style:"любой",
  collar:"любой",
  sleeve:"любой",
  name:"любой"
};
  }
 
 ngOnInit() {
   }
  ngOnChange() {

 
   }

}
