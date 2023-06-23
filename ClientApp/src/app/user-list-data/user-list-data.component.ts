import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list-data',
  templateUrl: './user-list-data.component.html',
})
export class UserListDataComponent {
  public users: User[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<User[]>(baseUrl + 'userlist').subscribe(result => {
      this.users = result;
    }, error => console.error(error));
  }
}

interface User {
  username: string;
  email: string;
  password: string;
}
