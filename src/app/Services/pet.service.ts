import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

import { Pet } from '../Shared/Entity/Pet';
import {environment} from '../../environments/environment';
import { PageList } from 'src/app/Shared/Entity/PageList';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../components/shared/confirmation-dialog/confirmation-dialog.component';



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
    return this.http.get<Pet>(this.PET_API_URL + '/' + id).pipe(catchError(this.handleError));
  }
  deletePet(id: number): Observable<Pet> {
    return this.http.delete<Pet>(this.PET_API_URL + '/' + id).pipe(catchError(this.handleError));
  }
  createPet(pet: Pet): Observable<any> {
    return this.http.post(this.PET_API_URL, pet).pipe(catchError(this.handleError));
  }
  editPet(pet: Pet): Observable<any> {
    return this.http.put(this.PET_API_URL, pet).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status !== 200) {
      // this.openErrorDialog(error.status, error.message);
    }
    return throwError(error);
  }

  /*openErrorDialog(statusCode: number, errorMessage: string): void
  {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px', data: 'Error ' + statusCode + ': ' + errorMessage
    });
    dialogRef.afterClosed().subscribe(result =>
    {
      if (result) {
        console.log('Yes clicked');
      }
    });
  }*/
}
