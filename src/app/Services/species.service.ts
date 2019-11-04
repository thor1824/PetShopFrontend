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
import {Species} from '../Model/Species';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  SPECIES_API_URL: string = environment.RestApiUrl + '/species';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private matDialog: MatDialog,
    private stateService: StateService
  ) {
  }

  getAllSpecies(): Observable<Species[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Species[]>(this.SPECIES_API_URL, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  getSpecies(id: number): Observable<Species> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Species>(this.SPECIES_API_URL + '/' + id, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  deleteSpecies(id: number): Observable<Species> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.delete<Species>(this.SPECIES_API_URL + '/' + id, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  createSpecies(species: Species): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post(this.SPECIES_API_URL, species, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  editSpecies(species: Species): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put(this.SPECIES_API_URL, species, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }
}
