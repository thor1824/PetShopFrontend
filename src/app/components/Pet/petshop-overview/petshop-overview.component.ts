import {Component, OnInit} from '@angular/core';
import {Pet} from '../../../Shared/Entity/Pet';
import {PetService} from '../../../Services/pet.service';
import {PageList} from '../../../Shared/Entity/PageList';
import {DialogService} from '../../../Services/dialog.service';

@Component({
  selector: 'app-pet-overview', templateUrl: './petshop-overview.component.html', styleUrls: ['./petshop-overview.component.css'],
})

export class PetshopOverviewComponent implements OnInit {

  constructor(private petService: PetService, private ds: DialogService) {
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
    this.ds.openConfirmationDialog('Do you wish to delete ' + pet.name + '?').afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.deletePet(pet.id);
      }
    });
  }
}
