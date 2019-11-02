import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Owner} from '../model/Owner';
import {PageList} from '../model/PageList';
import {catchError} from 'rxjs/operators';
import {handleHttpError} from '../functions/HandleHttpError';
import {MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  OWNER_API_URL: string = environment.RestApiUrl + '/owners';

  constructor(private http: HttpClient, private matDialog: MatDialog) {
  }

  createOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.OWNER_API_URL, owner).pipe(catchError(error => handleHttpError(error, this.matDialog)));
  }

  getOwners(): Observable<PageList<Owner>> {
    return this.http.get<PageList<Owner>>(this.OWNER_API_URL).pipe(catchError(error => handleHttpError(error, this.matDialog)));
  }

  getOwner(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.OWNER_API_URL + '/' + id).pipe(catchError(error => handleHttpError(error, this.matDialog)));
  }

  updateOwner(owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(this.OWNER_API_URL, owner).pipe(catchError(error => handleHttpError(error, this.matDialog)));
  }

  deleteOwner(id: number): Observable<Owner> {
    return this.http.delete<Owner>(this.OWNER_API_URL + '/' + id).pipe(catchError(error => handleHttpError(error, this.matDialog)));
  }

}
