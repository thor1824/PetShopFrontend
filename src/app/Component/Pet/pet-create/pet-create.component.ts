import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {PetService} from '../../../Services/pet.service';
import {openConfirmationDialog} from '../../../Functions/Dialog/OpenConfirmationDialog';
import {MatDialog} from '@angular/material';
import {Species} from '../../../Model/Species';
import {SpeciesService} from '../../../Services/species.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})


export class PetCreateComponent implements OnInit {
  placeholderImg;
  newPetForm = this.fb.group({
    imageUrl: [''],
    name: ['', Validators.required],
    species: ['', Validators.required],
    color: ['', Validators.required],
    price: ['', Validators.required],
    birthDate: ['', Validators.required],
    soldDate: ['']
  });

  species: Species[];

  constructor(private fb: FormBuilder,
              private location: Location,
              private petService: PetService,
              private matDialog: MatDialog,
              private speciesService: SpeciesService
  ) {
  }

  ngOnInit() {
    this.placeholderImg = 'https://via.placeholder.com/150';
    this.speciesService.getAllSpecies().subscribe(data => this.species = data);
  }

  createNewPet() {
    this.petService.createPet(this.newPetForm.value).subscribe(res => console.log(res));
  }

  cancel() {
    this.location.back();
  }

  openAddDialog(): void {
    openConfirmationDialog('Do you want to Add ' + this.newPetForm.controls.name.value + '?', this.matDialog)
      .afterClosed().subscribe(result => {
      if (result) {
        this.createNewPet();
        this.location.back();
      }
    });
  }
}
