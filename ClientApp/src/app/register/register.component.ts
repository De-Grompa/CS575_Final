import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  router: Router = '/' as unknown as Router;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const registerData = { name: this.name, email: this.email, password: this.password };
    this.http.post('/api/register', registerData).subscribe(response => {
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
    });
  }
}
