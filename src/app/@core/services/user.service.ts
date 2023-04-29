import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: any;
  private isLoggedIn: boolean = false;

  constructor() {
    this.setUserData();
  }

  public get currentUser(): firebase.User {
    return JSON.parse(this.user);
  }

  public get isSignedIn(): boolean {
    return this.isLoggedIn;
  }

  public setUserData() {
    if (localStorage.getItem('user')) {
      this.user = localStorage.getItem('user');
      this.isLoggedIn = true;
    }
  }
}
