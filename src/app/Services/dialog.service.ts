import {Injectable} from '@angular/core';
import {ErrorDialogComponent} from '../components/shared/error-dialog/error-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmationDialogComponent} from '../components/shared/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {
  }

  openConfirmationDialog(message): MatDialogRef<ConfirmationDialogComponent, any> {
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '350px', data: message
    });
  }

  openErrorDialog(statusCode: number, errorMessage: string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '350px', data: 'Error ' + statusCode + ': ' + errorMessage
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
      }
    });
  }
}
