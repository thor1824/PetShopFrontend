import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pet } from '../../Shared/Entity/Pet';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  pets: Pet[] = [
    {Id: 1 , Name: 'Lorem Ipsum', imageUrl: 'https://via.placeholder.com/150/0000FF/808080'},
    {Id: 2 , Name: 'bob', imageUrl: 'https://via.placeholder.com/150/0000FF/808080'},
    {Id: 3 , Name: 'john', imageUrl: 'https://via.placeholder.com/150/0000FF/808080'},
    {Id: 4 , Name: 'Rabsu', imageUrl: 'https://via.placeholder.com/150/0000FF/808080'},
    {Id: 5 , Name: 'Fluffy', imageUrl: 'https://via.placeholder.com/150/0000FF/808080'},
    {Id: 6 , Name: 'Jimbo', imageUrl: 'https://via.placeholder.com/150/0000FF/808080'},
    {Id: 7 , Name: 'Mong', imageUrl: 'https://via.placeholder.com/150/0000FF/808080'}
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
