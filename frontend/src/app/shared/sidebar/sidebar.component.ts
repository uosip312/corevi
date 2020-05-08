import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth/auth-service.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: User = {
    id: Number(localStorage.getItem('userId')),
    name: localStorage.getItem('name'),
    role: Number(localStorage.getItem('role')),
    user: null,
    pass: null
  };

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    this.getRole();
  }

  getRole() {
    return this.user.role = Number(localStorage.getItem('role'));
  }

}
