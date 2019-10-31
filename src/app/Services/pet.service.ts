import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

import { Pet } from '../Shared/Entity/Pet';
import {environment} from '../../environments/environment';
import { PageList } from 'src/app/Shared/Entity/PageList';
import {MatDialog} from '@angular/material';
import {ErrorDialogComponent} from '../components/shared/error-dialog/error-dialog.component';



@Injectable({
  providedIn: 'root'
})



export class PetService {
  PET_API_URL: string = environment.RestApiUrl + '/pets';
  constructor(private http: HttpClient,  public dialog: MatDialog) { }
  getPets(pageIndex: number, pageSize: number): Observable<PageList<Pet>> {
    return this.http.get<PageList<Pet>>(this.PET_API_URL + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize);
  }
  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.PET_API_URL + '/' + id).pipe(catchError(error => this.handleError(error, this.dialog)));
  }
  deletePet(id: number): Observable<Pet> {
    return this.http.delete<Pet>(this.PET_API_URL + '/' + id).pipe(catchError(error => this.handleError(error, this.dialog)));
  }
  createPet(pet: Pet): Observable<any> {
    return this.http.post(this.PET_API_URL, pet).pipe(catchError(error => this.handleError(error, this.dialog)));
  }
  editPet(pet: Pet): Observable<any> {
    return this.http.put(this.PET_API_URL, pet).pipe(catchError(error => this.handleError(error, this.dialog)));
  }

  handleError(error: HttpErrorResponse, dialog: MatDialog) {
    if (error.status !== 200) {
      this.openErrorDialog(error.status, error.error, dialog);
    }
    return throwError(error);
  }

  openErrorDialog(statusCode: number, errorMessage: string, dialog: MatDialog): void
  {
    const dialogRef = dialog.open(ErrorDialogComponent, {
      width: '350px', data: 'Error ' + statusCode + ': ' + errorMessage
    });
    dialogRef.afterClosed().subscribe(result =>
    {
      if (result) {
        console.log('Yes clicked');
      }
    });
  }
}
