import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';
  router: Router = '/' as unknown as Router;

  constructor(private http: HttpClient) { }

  onSubmit() {
    const loginData = { username: this.username, password: this.password };
    this.http.post('/api/login', loginData).subscribe(response => {
      this.router.navigate(['/']);
    }, error => { console.log(error); });
  }
}
