import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {Pet} from '../Shared/Entity/Pet';
import {environment} from '../../environments/environment';
import {PageList} from 'src/app/Shared/Entity/PageList';
import {DialogService} from './dialog.service';


@Injectable({
  providedIn: 'root'
})


export class PetService {
  PET_API_URL: string = environment.RestApiUrl + '/pets';

  constructor(private http: HttpClient, private ds: DialogService) {
  }

  getPets(pageIndex: number, pageSize: number): Observable<PageList<Pet>> {
    return this.http.get<PageList<Pet>>(this.PET_API_URL + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize);
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.PET_API_URL + '/' + id).pipe(catchError(error => this.handleError(error, this.ds)));
  }

  deletePet(id: number): Observable<Pet> {
    return this.http.delete<Pet>(this.PET_API_URL + '/' + id).pipe(catchError(error => this.handleError(error, this.ds)));
  }

  createPet(pet: Pet): Observable<any> {
    return this.http.post(this.PET_API_URL, pet).pipe(catchError(error => this.handleError(error, this.ds)));
  }

  editPet(pet: Pet): Observable<any> {
    return this.http.put(this.PET_API_URL, pet).pipe(catchError(error => this.handleError(error, this.ds)));
  }

  handleError(error: HttpErrorResponse, ds: DialogService) {
    if (error.status !== 200) {
      this.ds.openErrorDialog(error.status, error.error);
    }
    return throwError(error);
  }
}
