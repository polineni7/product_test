import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin === 'true') {
      this.router.navigate(['/home']);
    }
  }

  onLogin(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password');
    }
  }
}
