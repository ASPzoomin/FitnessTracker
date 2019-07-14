import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
    private user: User;
    authChange = new Subject<boolean>();
    constructor(private route:Router){}
    registeredUser(authData: AuthData) {
        this.user ={
            email:authData.email,
            userId:Math.round(Math.random()*10000).toString()
        };
        this.authChange.next(true);
        this.route.navigate(['/training'])
    }
    login(authData: AuthData) {
        this.user ={
            email:authData.email,
            userId:Math.round(Math.random()*10000).toString()
        };
        this.authChange.next(true);
        this.route.navigate(['/training'])
    }
    logout() {
        this.user = null;
        this.authChange.next(false);
        this.route.navigate(['/login'])
    }
    getUser() {
        return {...this.user};
    }

    isAuth() {
        return this.user!= null;
    }
}