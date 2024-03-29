import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {MatDialog} from '@angular/material';
import {handleHttpError} from '../Functions/ErrorHandling/HandleHttpError';
import {StateService} from './state.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private matDialog: MatDialog, private state: StateService, private router: Router) {

  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.RestApiUrl + '/token', {username, password})
      .pipe(catchError(error => handleHttpError(error, this.matDialog, this.state)), map(response => {
        const token = response.token;
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

          this.state.loginEmit();

          this.router.navigate(['/dashboard']);
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.state.logoutEmit();
    this.router.navigate(['dashboard']);
  }
}
