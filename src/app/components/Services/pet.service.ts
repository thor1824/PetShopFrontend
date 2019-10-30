import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pet } from '../../Shared/Entity/Pet';
import {environment} from '../../../environments/environment';
import { PageList } from 'src/app/Shared/Entity/PageList';
import {error} from 'util';


@Injectable({
  providedIn: 'root'
})



export class PetService {
  PET_API_URL: string = environment.RestApiUrl + '/pets';
  constructor(private http: HttpClient) { }
  getPets(pageIndex: number, pageSize: number): Observable<PageList<Pet>> {
    return this.http.get<PageList<Pet>>(this.PET_API_URL + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize);
  }
  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.PET_API_URL + '/' + id);
  }
  deletePet(id: number): Observable<Pet> {
    console.log('bob1.2')
    return this.http.delete<Pet>(this.PET_API_URL + '/' + id);
  }
  createPet(pet: Pet): void {
  }
  editPet(pet: Pet): void {
    console.log('edit:' + pet);
  }
}
