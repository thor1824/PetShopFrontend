import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Pet} from '../../Shared/Entity/Pet';
import {PetService} from '../../Shared/Services/pet.service';

@Component({
  selector: 'app-pet-overview', templateUrl: './petshop-overview.component.html', styleUrls: ['./petshop-overview.component.css'],
})

export class PetshopOverviewComponent implements OnInit {
  pets: Pet[];

  constructor(private petService: PetService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }
}
