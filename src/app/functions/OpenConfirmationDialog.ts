import {MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmationDialogComponent} from '../components/shared/confirmation-dialog/confirmation-dialog.component';

export function openConfirmationDialog(message, dialog: MatDialog): MatDialogRef<ConfirmationDialogComponent, any> {
  return dialog.open(ConfirmationDialogComponent, {
    width: '350px', data: message
  });
}
