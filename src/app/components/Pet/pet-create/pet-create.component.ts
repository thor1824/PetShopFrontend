import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})



export class PetCreateComponent implements OnInit {
  imageUrl: string;
  name: string;
  species: number;
  color: string;
  price: number;
  placeholderImg;
  birthDate: Date;

  newPetForm = this.fb.group({
    imageUrl: ['', Validators.required],
    name: ['', Validators.required],
    species: ['', Validators.required],
    color: ['', Validators.required],
    price: ['', Validators.required],
    birthDate: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.placeholderImg = 'https://via.placeholder.com/150';
  }

  createNewPet() {

  }

  cancel() {

  }
}
