import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';
@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
    
  transform(collection , sortObject){
     let sort  =_.omit(sortObject, function(value, key, object) {
     if(value ==='любой'){return key.toString}})
     return _.where(collection, sort);
    // Вернёт массив из collection, для которых совпадают значения  ключей, перечисленные в sortObject.
  }
}