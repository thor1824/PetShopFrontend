import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material';

import {ConfirmationDialogComponent} from '../../shared/confirmation-dialog/confirmation-dialog.component';
import {PetService} from '../../../Services/pet.service';
import {Pet} from '../../../Shared/Entity/Pet';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-pet-detail', templateUrl: './pet-detail.component.html', styleUrls: ['./pet-detail.component.css']
})

export class PetDetailComponent implements OnInit
{
  edit = false;
  pet: Pet;
  title = 'angular-confirmation-dialog';

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
  constructor(private petService: PetService, private route: ActivatedRoute, private location: Location, public dialog: MatDialog, private fb: FormBuilder)
  {
  }

  getPet(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id).subscribe(pet =>
    {
      this.updatePetForm.patchValue({
        id: pet.id,
        name: pet.name,
        imageUrl: pet.imageUrl,
        species: pet.pType,
        color: pet.color,
        price: pet.price,
        birthDate: pet.birthDate,
        soldDate: pet.soldDate
      });
      this.pet = pet;
    });
  }

  goBack(): void
  {
    this.location.back();
  }

  enableEdit(choice: boolean)
  {
    this.edit = choice;
  }

  openEditDialog(): void
  {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px', data: 'Do you want to save Changes?'
    });
    dialogRef.afterClosed().subscribe(result =>
    {
      if (result) {
        console.log('Yes clicked');
        this.saveChanges();
      }
    });
  }

  saveChanges(): void {
    if (this.updatePetForm.valid) {
      this.petService.editPet(this.updatePetForm.value).subscribe(result => {
        console.log(result);
        this.getPet();
      });
      this.edit = false;
    } else {
      console.log('something went wrong: Forms not valid');
    }
  }

  setData(): void
  {
    console.log('start');

  }


  ngOnInit()
  {
    this.getPet();
    this.setData();
  }

}
