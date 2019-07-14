import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { format } from 'url';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }
  onSubmit(f:NgForm) {
    this.authService.registeredUser({
      email: f.value.email,
      password: f.value.password
    });
  }
}
