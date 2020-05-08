import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthConfigGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if ( this.authService.isLoggedIn !== true ) {
        Swal.fire({
          icon: 'error',
          title: 'Oops... Acceso no Permitido!',
          text: 'Debes iniciar sesión',
          confirmButtonColor: '#3085d6',
          allowOutsideClick: false,
          confirmButtonText: 'Ir al Login',
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/login']);
          }
        });
      }
      return true;
  }

}
