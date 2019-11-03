import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {handleHttpError} from '../Functions/ErrorHandling/HandleHttpError';

import {Pet} from '../Model/Pet';
import {environment} from '../../environments/environment';
import {PageList} from 'src/app/Model/PageList';
import {AuthenticationService} from './authentication.service';
import {MatDialog} from '@angular/material';
import {StateService} from './state.service';

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
    private matDialog: MatDialog,
    private stateService: StateService
  ) {
  }

  getPets(pageIndex: number, pageSize: number): Observable<PageList<Pet>> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<PageList<Pet>>(this.PET_API_URL + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  getPet(id: number): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Pet>(this.PET_API_URL + '/' + id, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  deletePet(id: number): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.delete<Pet>(this.PET_API_URL + '/' + id, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  createPet(pet: Pet): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post(this.PET_API_URL, pet, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  editPet(pet: Pet): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put(this.PET_API_URL, pet, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }
}
