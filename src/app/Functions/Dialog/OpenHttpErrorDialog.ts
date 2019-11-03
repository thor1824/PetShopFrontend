import {HttpErrorResponse} from '@angular/common/http';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ErrorDialogComponent} from '../../Component/shared/error-dialog/error-dialog.component';

export function openHttpErrorDialog(error: HttpErrorResponse, dialog: MatDialog): MatDialogRef<ErrorDialogComponent, any> {
  return dialog.open(ErrorDialogComponent, {
    width: '350px', data: 'Error ' + error.status + ': ' + ((error.error === null) ? error.statusText : error.error)
  });
}

export function openMessageErrorDialog(errorCode: number, message: string, dialog: MatDialog): MatDialogRef<ErrorDialogComponent, any>  {
  return dialog.open(ErrorDialogComponent, {
    width: '350px', data: 'Error ' + errorCode + ': ' + message
  });
}
