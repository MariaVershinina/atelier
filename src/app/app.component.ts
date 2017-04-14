import { Component } from '@angular/core';
import { AuthService } from  "./services/auth.service";
import { UsersService } from  "./services/users.service";
import { AddService } from  "./services/add.service";
import { User } from "./models";
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 public message = "Войти в личный кабинет"
    public modal:boolean=true;
    public registration:boolean=false;
    public repeat:boolean=false;
    public currentuser:User;
    public newuser:User =  new User();
    public users:User[];
    constructor(private _auth: AuthService, private router:Router,private usersService:UsersService,private addService:AddService) {
      usersService.users.subscribe(users=>this.users=users);
      usersService.currentuser.subscribe();
      usersService.addUsers();
      usersService.addCurrentUser();
     
    }

    login(email: string, password: string): boolean {
      if (this._auth.login(email, password)) {this.router.navigate(['user']);return false;}
      else{this.message = 'Введены неверные данные';
           setTimeout(function() {
            this.message = 'Войти в личный кабинет';
           }.bind(this), 2500);
          }
      return false;
    }

    logOut(){
        this._auth.isLoggedOut();
        this.currentuser = null;
        this.modal = true;
        this.router.navigate(['']);
        return false;
    }

    addNewUser(){
      if( (this.users.filter((user)=>user.email === this.newuser.email.toLowerCase()))[0]){
        this.repeat = true;
        setTimeout(function() {
            this.repeat = false;
        }.bind(this), 1500);
      }
      else{   
       this.newuser.cart = [];
       this.newuser.items = [];
       this.addService.addNewUser(this.newuser);
       this.registration = false;
       this.newuser =  new User()
      }
    }

  ngOnInit() {
    
  }
  ngDoCheck(){ this.currentuser = JSON.parse(localStorage.getItem("currentuser"));
                if(this.currentuser){this.modal = false}
  }

}
