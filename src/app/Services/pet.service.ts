import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {handleHttpError} from '../functions/HandleHttpError';

import {Pet} from '../model/Pet';
import {environment} from '../../environments/environment';
import {PageList} from 'src/app/model/PageList';
import {AuthenticationService} from './authentication.service';
import {Globals} from '../model/Global';
import {MatDialog} from '@angular/material';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PetService {
  PET_API_URL: string = environment.RestApiUrl + '/pets';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    public globals: Globals,
    private matDialog: MatDialog
  ) {
  }

  getPets(pageIndex: number, pageSize: number): Observable<PageList<Pet>> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<PageList<Pet>>(this.PET_API_URL + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog)));
  }

  getPet(id: number): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Pet>(this.PET_API_URL + '/' + id, httpOptions).pipe(catchError(error => handleHttpError(error, this.matDialog)));
  }

  deletePet(id: number): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.delete<Pet>(this.PET_API_URL + '/' + id, httpOptions).pipe(catchError(error => handleHttpError(error, this.matDialog)));
  }

  createPet(pet: Pet): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post(this.PET_API_URL, pet, httpOptions).pipe(catchError(error => handleHttpError(error, this.matDialog)));
  }

  editPet(pet: Pet): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put(this.PET_API_URL, pet, httpOptions).pipe(catchError(error => handleHttpError(error, this.matDialog)));
  }
}
