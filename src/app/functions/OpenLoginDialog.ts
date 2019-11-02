import {MatDialog} from '@angular/material';
import {UserLoginComponent} from '../components/shared/user-login/user-login.component';


export function openLoginWindow(dialog: MatDialog): void {
  const dialogRef = dialog.open(UserLoginComponent, {
    maxWidth: '350px', data: 'login'
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Yes clicked');
    }
  });
}
