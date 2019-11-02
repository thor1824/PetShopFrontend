import {Component, OnInit} from '@angular/core';
import {Pet} from '../../../model/Pet';
import {PetService} from '../../../Services/pet.service';
import {PageList} from '../../../model/PageList';
import {MatDialog} from '@angular/material';
import {openConfirmationDialog} from '../../../functions/OpenConfirmationDialog';

@Component({
  selector: 'app-pet-overview', templateUrl: './petshop-overview.component.html', styleUrls: ['./petshop-overview.component.css'],
})

export class PetshopOverviewComponent implements OnInit {

  constructor(private petService: PetService, private matDialog: MatDialog) {
  }

  pageList: PageList<Pet>;

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets(0, 12).subscribe(pageList => this.pageList = pageList);
  }

  deletePet(id: number): void {
    this.petService.deletePet(id).subscribe(() => {
      this.getPets();
    });
  }

  changePageData(event) {
    this.petService.getPets(event.pageIndex, event.pageSize).subscribe(pageList => this.pageList = pageList);
  }

  openDialog(pet: Pet): void {
    openConfirmationDialog('Do you wish to delete ' + pet.name + '?', this.matDialog)
      .afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.deletePet(pet.id);
      }
    });
  }
}
