import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from '../_Services/Authentification.service';

@Injectable({ providedIn: 'root' })
export class AppGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const data = this.authenticationService.currentUserValue;
    console.log(data);
    if (data) {
       return true;
    }
    this.router.navigate(['/game/login'] , { queryParams: { returnUrl: state.url } });
    return false;
  }
}
