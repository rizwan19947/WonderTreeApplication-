import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from './user.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private userService: UserService
  ) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userService.currentUser = user;
      } else {
        this.userService.currentUser = undefined;
      }
    });
  }

  async signIn(email: string, password: string) {
    const result: firebase.auth.UserCredential =
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  async signUp(email: string, password: string, name: string) {
    const result: firebase.auth.UserCredential =
      await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
    await result.user?.updateProfile({ displayName: name });
  }

  async logOut() {
    await this.firebaseAuth.signOut();
  }
}
