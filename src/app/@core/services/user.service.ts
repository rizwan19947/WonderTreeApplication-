import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: firebase.User | undefined;

  constructor() {}

  public get currentUser(): any {
    return this.user;
  }

  public set currentUser(user: any) {
    this.user = user;
  }

  public get isLoggedIn(): boolean {
    return !!this.user;
  }
}
