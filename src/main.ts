import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}
if(!(localStorage.getItem("currentuser")))
{
localStorage.setItem("users",JSON.stringify(
  [{"email":"ivanov@mail.ru", 
  "name":"Иван",
  "surname":"Иванов",
  "password":"ваня",
  "neck":35,
  "chest":94,
  "waist":75,
  "thigh":90,
  "biceps":31,
  "wrist":16,
  "cart":[],
  "items":[]
},
{"email":"petrov@mail.ru", 
  "name":"Петр",
  "surname":"Петров",
  "password":"петя",
  "neck":32,
  "chest":96,
  "waist":90,
  "thigh":92,
  "biceps":32,
  "wrist":20,
  "cart":[],
  "items":[]
}])) 
};

platformBrowserDynamic().bootstrapModule(AppModule);
