import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  imports: [FormsModule],
  templateUrl: './authorization.html',
  styleUrl: './authorization.css',
  standalone: true,
})
export class Authorization {
  login: string = '';
  password: string = '';
  loginUser() {
    console.log('Вход:', this.login, this.password);
  }
}
