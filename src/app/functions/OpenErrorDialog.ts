import {HttpErrorResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {ErrorDialogComponent} from '../components/shared/error-dialog/error-dialog.component';

export function openErrorDialog(error: HttpErrorResponse, dialog: MatDialog): void {
  const dialogRef = dialog.open(ErrorDialogComponent, {
    width: '350px', data: 'Error ' + error.status + ': ' + ((error.error === null) ? error.statusText : error.error)
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Yes clicked');
    }
  });
}
