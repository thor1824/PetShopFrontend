import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {openHttpErrorDialog, openMessageErrorDialog} from '../Dialog/OpenHttpErrorDialog';
import {MatDialog} from '@angular/material';
import {StateService} from '../../Services/state.service';

export function handleHttpError(error: HttpErrorResponse, matDialog: MatDialog, state: StateService) {
  if (error.status !== 200) {
    if (error.status === 401 && state.IsLoggedIn()) {
      openMessageErrorDialog(error.status, 'Session have timed out. please log in again', matDialog).afterClosed().subscribe(result => {
        if (result) {
          console.log('session timeout');
          state.logoutEmit();
        }
      });
    } else {
      openHttpErrorDialog(error, matDialog).afterClosed().subscribe(result => {
        if (result) {
          console.log('Yes clicked');
        }
      });
    }
  }
  return throwError(error);
}
