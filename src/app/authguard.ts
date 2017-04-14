import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from  "./services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
 
 constructor(private router: Router,private _auth: AuthService) { }
 
 canActivate():boolean {
    if (this._auth.isLoggedIn()) { return true;}
    return false;
    }
    
}