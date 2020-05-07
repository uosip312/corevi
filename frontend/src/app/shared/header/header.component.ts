import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth/auth-service.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: User = {
    id: Number(localStorage.getItem('userId')),
    name: localStorage.getItem('name'),
    role: Number(localStorage.getItem('role')),
    user: null
  };


  constructor(private authService: AuthServiceService) {}

  ngOnInit() {}

  logout() {
    this.authService.doLogout();
    alert('logout');
  }
}
