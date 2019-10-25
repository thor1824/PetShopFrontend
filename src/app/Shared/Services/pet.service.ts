import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pet } from '../Entity/Pet';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  pets: Pet[] = [
    {Id: 1 , Name: 'john'},
    {Id: 2 , Name: 'bob'},
    {Id: 3 , Name: 'ib'},
    {Id: 4 , Name: 'john'}
  ];
  constructor() { }
  getPets(): Observable<Pet[]> {
    return of(this.pets);
  }
  getPet(id: number): Observable<Pet> {
    return of(this.pets.find( pet => pet.Id === id));
  }
  deletePet(id: number): void {
  }
  createPet(pet: Pet): void {
  }
  editPet(pet: Pet): void {
    console.log('edit:' + pet)
  }
}
