import {Component, OnInit} from '@angular/core';
import {StateService} from '../../../Services/state.service';
import {MatDialog} from '@angular/material';
import {openLoginWindow} from 'src/app/Functions/Dialog/OpenLoginDialog';
import {AuthenticationService} from '../../../Services/authentication.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-petshop-header',
  templateUrl: './petshop-header.component.html',
  styleUrls: ['./petshop-header.component.css']
})
export class PetshopHeaderComponent implements OnInit {
  searchText: string;
  username = 'Capt_Lowkey';
  isLoggedIn: boolean;
  toggleUserCard: boolean;

  constructor(private state: StateService, private matDialog: MatDialog , private authService: AuthenticationService) {
    state.loggedInStatus$.subscribe(result => this.isLoggedIn = result);
    state.emit();
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
    this.toggleUsercard();
    this.authService.logout();
  }

  toggleUsercard() {
    if (this.toggleUserCard) {
      this.toggleUserCard = false;
    } else {
      this.toggleUserCard = true;
    }
  }


}
