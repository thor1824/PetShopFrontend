import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {openErrorDialog} from '../Dialog/OpenErrorDialog';
import {MatDialog} from '@angular/material';

export function handleHttpError(error: HttpErrorResponse, matDialog: MatDialog) {
  if (error.status !== 200) {
    openErrorDialog(error, matDialog);
    if (error.status === 401 && this.globals.loggedIn) {
      this.authenticationService.logout();
    }
  }
  return throwError(error);
}
