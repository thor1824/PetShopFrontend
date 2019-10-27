import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Pet} from '../../../Shared/Entity/Pet';
import {PetService} from '../../Services/pet.service';

@Component({
  selector: 'app-pet-overview', templateUrl: './petshop-overview.component.html', styleUrls: ['./petshop-overview.component.css'],
})

export class PetshopOverviewComponent implements OnInit {
  pets: Pet[];
  constructor(private petService: PetService) {
  }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }
  deletePet(id: number): void {
    console.log('trying to delete pet:' + id);
    this.petService.deletePet(id);
  }
}
