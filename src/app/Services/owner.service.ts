import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Owner} from '../Model/Owner';
import {PageList} from '../Model/PageList';
import {catchError} from 'rxjs/operators';
import {handleHttpError} from '../Functions/ErrorHandling/HandleHttpError';
import {MatDialog} from '@angular/material';
import {StateService} from './state.service';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  OWNER_API_URL: string = environment.RestApiUrl + '/owners';

  constructor(
    private http: HttpClient,
    private matDialog: MatDialog,
    private stateService: StateService,
    private authenticationService: AuthenticationService,) {
  }

  createOwner(owner: Owner): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post<Owner>(this.OWNER_API_URL, owner, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  getOwners(): Observable<PageList<Owner>> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<PageList<Owner>>(this.OWNER_API_URL, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  getOwner(id: number): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Owner>(this.OWNER_API_URL + '/' + id, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  updateOwner(owner: Owner): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put<Owner>(this.OWNER_API_URL, owner, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

  deleteOwner(id: number): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.delete<Owner>(this.OWNER_API_URL + '/' + id, httpOptions)
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.stateService)));
  }

}
