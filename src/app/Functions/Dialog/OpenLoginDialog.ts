import {MatDialog} from '@angular/material';
import {UserLoginComponent} from '../../Component/shared/user-login/user-login.component';


export function openLoginWindow(dialog: MatDialog): void {
  const dialogRef = dialog.open(UserLoginComponent, {
    width: '350px', height: '260px', data: 'login'
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Yes clicked');
    }
  });
}
