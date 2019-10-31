import {Component, OnInit} from '@angular/core';
import {UserLoginComponent} from '../user-login/user-login.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-petshop-header',
  templateUrl: './petshop-header.component.html',
  styleUrls: ['./petshop-header.component.css']
})
export class PetshopHeaderComponent implements OnInit {
  searchText: string;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      console.log(this.searchText);
    }
  }

  openLoginWindow() {
    const dialogRef = this.dialog.open(UserLoginComponent, {
      width: '350px', data: 'login'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
      }
    });
  }

}
