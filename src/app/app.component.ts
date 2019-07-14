import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription;
  constructor(private authService:AuthService){}

  ngOnInit() {
    this.authSubscription=this.authService.authChange.subscribe(authStatus =>{
      this.isAuth = authStatus;
    })
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
