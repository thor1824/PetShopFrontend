import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PetService} from '../../../Services/pet.service';
import {Pet} from '../../../Model/Pet';
import {FormBuilder, Validators} from '@angular/forms';
import {openConfirmationDialog} from '../../../Functions/Dialog/OpenConfirmationDialog';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-pet-detail', templateUrl: './pet-detail.component.html', styleUrls: ['./pet-detail.component.css']
})

export class PetDetailComponent implements OnInit {
  edit = false;
  pet: Pet;

  updatePetForm = this.fb.group({
    id: ['', Validators.required],
    imageUrl: [''],
    name: ['', Validators.required],
    species: ['', Validators.required],
    color: ['', Validators.required],
    price: ['', Validators.required],
    birthDate: ['', Validators.required],
    soldDate: ['', Validators.required]
  });

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {
  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id).subscribe(pet => {
      this.updatePetForm.patchValue({
        id: pet.id,
        name: pet.name,
        imageUrl: pet.imageUrl,
        species: pet.species,
        color: pet.color,
        price: pet.price,
        birthDate: pet.birthDate,
        soldDate: pet.soldDate
      });
      this.pet = pet;
    });
  }

  goBack(): void {
    this.location.back();
  }

  enableEdit(choice: boolean) {
    this.edit = choice;
  }

  openEditDialog(): void {
    openConfirmationDialog('Do you want to save Changes?', this.matDialog).afterClosed().subscribe(result => {
      if (result) {
        this.saveChanges();
      }
    });
  }

  saveChanges(): void {
      this.petService.editPet(this.updatePetForm.value).subscribe(result => {
        console.log(result);
        this.getPet();
      });
      this.edit = false;
  }

  ngOnInit() {
    this.getPet();
  }

}
