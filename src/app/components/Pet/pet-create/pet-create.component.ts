import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Location} from '@angular/common';
import {PetService} from '../../../Services/pet.service';
import {ConfirmationDialogComponent} from '../../shared/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})



export class PetCreateComponent implements OnInit {
  placeholderImg;
  newPetForm = this.fb.group({
    imageUrl: ['', Validators.required],
    name: ['', Validators.required],
    species: ['', Validators.required],
    color: ['', Validators.required],
    price: ['', Validators.required],
    birthDate: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private location: Location, private petService: PetService,  public dialog: MatDialog) { }

  ngOnInit() {
    this.placeholderImg = 'https://via.placeholder.com/150';
  }

  createNewPet() {
    this.petService.createPet(this.newPetForm.value).subscribe(res => console.log(res));
  }

  cancel() {
    this.location.back();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px', data: 'Do you want to Add Entity?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.createNewPet();
      }
    });
  }
}
