import {Component, OnInit} from '@angular/core';
import {Pet} from '../../../Shared/Entity/Pet';
import {PetService} from '../../Services/pet.service';
import {PageEvent} from '@angular/material';
import {PageList} from '../../../Shared/Entity/PageList';

@Component({
  selector: 'app-pet-overview', templateUrl: './petshop-overview.component.html', styleUrls: ['./petshop-overview.component.css'],
})

export class PetshopOverviewComponent implements OnInit {

  constructor(private petService: PetService) {
  }
  pageList: PageList<Pet>;
  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets(0, 12).subscribe(pageList => this.pageList = pageList);
  }
  deletePet(id: number): void {
    console.log('bob1.1')
    this.petService.deletePet(id).subscribe();
  }
  changePageData(event) {
    this.petService.getPets(event.pageIndex, event.pageSize).subscribe(pageList => this.pageList = pageList);
  }
}
