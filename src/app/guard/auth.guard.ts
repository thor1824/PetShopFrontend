import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../Services/authentication.service';
import {MatDialog} from '@angular/material';
import {openLoginWindow} from '../functions/OpenLoginDialog';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService, private matDialog: MatDialog) {
  }

  canActivate() {
    if (this.authService.getToken()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    openLoginWindow(this.matDialog);
    return false;
  }
}
