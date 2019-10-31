import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {PetService} from '../../../Services/pet.service';
import {DialogService} from '../../../Services/dialog.service';

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
  });

  constructor(private fb: FormBuilder, private location: Location, private petService: PetService, private ds: DialogService) {
  }

  ngOnInit() {
    this.placeholderImg = 'https://via.placeholder.com/150';
  }

  createNewPet() {
    this.petService.createPet(this.newPetForm.value).subscribe(res => console.log(res));
  }

  cancel() {
    this.location.back();
  }

  openAddDialog(): void {
    this.ds.openConfirmationDialog('Do you want to Add ' + this.newPetForm.controls.name.value + '?').afterClosed().subscribe(result => {
      if (result) {
        this.createNewPet();
        this.location.back();
      }
    });
  }
}
