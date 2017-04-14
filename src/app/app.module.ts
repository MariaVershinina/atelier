import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { ItemComponent } from './collection/item/item.component';
import { UserComponent } from './user/user.component'
import { CartComponent } from './user/cart/cart.component';
import { ItemcartComponent } from './user/cart/itemcart/itemcart.component';
import { MyitemComponent } from './user/myitems/myitem/myitem.component';
import { DataComponent } from './user/data/data.component';
import { BuyshirtComponent } from './user/buyshirt/buyshirt.component';
import { MyitemsComponent } from './user/myitems/myitems.component';

import {ShirtService} from "./services/shirt.service";
import {UsersService} from "./services/users.service";
import {AuthService} from "./services/auth.service";
import {AddService} from "./services/add.service";
import { SortPipe } from './sort.pipe';
import { AuthGuard } from './authguard';


const routes = [
  { path: '', component: HomeComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'collection', component: CollectionComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard],children: [
            { path: '', component: BuyshirtComponent },
            { path: 'data', component: DataComponent },
            { path: 'myitems', component: MyitemsComponent},
            { path: 'cart', component: CartComponent}
      ]},
  { path: "**", redirectTo: '/'} 
]; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionComponent,
    ItemComponent,
    SortPipe,
    UserComponent,
    CartComponent,
    ItemcartComponent,
    DataComponent,
    BuyshirtComponent,
    MyitemComponent,
    MyitemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [UsersService,ShirtService,AuthService,AddService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
