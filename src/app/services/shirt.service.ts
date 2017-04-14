import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Shirt } from "./../models";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"

@Injectable()
export class ShirtService {
  public shirt: Observable<Shirt[]>
  
    constructor(private _http: Http) {
       this.shirt = this._http.get('./assets/shirt.json').map((resp: Response) => resp.json())
   }
                       
}

