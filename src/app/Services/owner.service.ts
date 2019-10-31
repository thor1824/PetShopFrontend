import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Owner} from '../Shared/Entity/Owner';
import {PageList} from '../Shared/Entity/PageList';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  OWNER_API_URL: string = environment.RestApiUrl + '/owners';
  constructor(private http: HttpClient) { }

  createOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.OWNER_API_URL, owner).pipe(catchError(this.handleError));
  }
  getOwners(): Observable<PageList<Owner>> {
    return this.http.get<PageList<Owner>>(this.OWNER_API_URL).pipe(catchError(this.handleError));
  }
  getOwner(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.OWNER_API_URL + '/' + id).pipe(catchError(this.handleError));
  }
  updateOwner(owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(this.OWNER_API_URL, owner).pipe(catchError(this.handleError));
  }
  deleteOwner(id: number): Observable<Owner>{
    return this.http.delete<Owner>(this.OWNER_API_URL + '/' + id).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    if (error.status !== 200) {
      // this.openErrorDialog(error.status, error.message);
    }
    return throwError(error);
  }
}
