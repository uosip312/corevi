import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    user: null,
    pass: null
  };

  constructor(
    public fb: FormBuilder,
    public authService: AuthServiceService,
    public router: Router
  ) {
    // Redirecciona a inicio si ya esta logado.
    if ( this.authService.isLoggedIn ) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() { }

  get f() { return this.form; }

  onSubmit() {
    this.authService.login(this.f.user, this.f.pass);
  }

}
