// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  loggedIn = JSON.parse(localStorage.getItem('currentUser')) !== null;
}
