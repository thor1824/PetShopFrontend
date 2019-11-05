import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuthenticationService} from '../../../Services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username: string;
  password: string;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<UserLoginComponent>,
    private as: AuthenticationService,
    @Inject(MAT_DIALOG_DATA) public message: string,
  ) {
  }

  cancel(): void {
    this.dialogRef.close();
  }


  login() {
    this.loading = true;
    this.as.login(this.username, this.password).subscribe((result) => {
      if (result) {
        console.log('check');
      } else {
        console.log('fail');
      }
      this.dialogRef.close();
      this.loading = false;
    });
  }
}


