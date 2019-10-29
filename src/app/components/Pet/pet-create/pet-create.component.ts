import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.placeholderImg = 'https://via.placeholder.com/150';
  }

  createNewPet() {

  }

  cancel() {

  }
}
