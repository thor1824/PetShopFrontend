import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Owner} from '../Shared/Entity/Owner';
import {PageList} from '../Shared/Entity/PageList';
import {catchError} from 'rxjs/operators';
import {DialogService} from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  OWNER_API_URL: string = environment.RestApiUrl + '/owners';

  constructor(private http: HttpClient, private ds: DialogService) {
  }

  createOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.OWNER_API_URL, owner).pipe(catchError(error => this.handleError(error, this.ds)));
  }

  getOwners(): Observable<PageList<Owner>> {
    return this.http.get<PageList<Owner>>(this.OWNER_API_URL).pipe(catchError(error => this.handleError(error, this.ds)));
  }

  getOwner(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.OWNER_API_URL + '/' + id).pipe(catchError(error => this.handleError(error, this.ds)));
  }

  updateOwner(owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(this.OWNER_API_URL, owner).pipe(catchError(error => this.handleError(error, this.ds)));
  }

  deleteOwner(id: number): Observable<Owner> {
    return this.http.delete<Owner>(this.OWNER_API_URL + '/' + id).pipe(catchError(error => this.handleError(error, this.ds)));
  }

  handleError(error: HttpErrorResponse, ds: DialogService) {
    if (error.status !== 200) {
      this.ds.openErrorDialog(error.status, error.error);
    }
    return throwError(error);
  }
}
