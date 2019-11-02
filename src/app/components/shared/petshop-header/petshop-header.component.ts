import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../Services/authentication.service';
import {Globals} from '../../../model/Global';
import {MatDialog} from '@angular/material';
import {openLoginWindow} from 'src/app/functions/OpenLoginDialog';

@Component({
  selector: 'app-petshop-header',
  templateUrl: './petshop-header.component.html',
  styleUrls: ['./petshop-header.component.css']
})
export class PetshopHeaderComponent implements OnInit {
  searchText: string;
  username = 'Capt_Lowkey';
  test: boolean;

  constructor(private as: AuthenticationService, public global: Globals, private matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      console.log(this.searchText);
    }
  }

  openLoginWindow() {
    openLoginWindow(this.matDialog);
  }

  logout() {
    this.as.logout();
    this.toggleUsercard();
  }

  toggleUsercard() {
    if (this.test) {
      this.test = false;
    } else {
      this.test = true;
    }
  }
}
