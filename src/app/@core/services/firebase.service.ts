import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from './user.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router
  ) {
    // firebaseAuth.onAuthStateChanged((user: firebase.User | null) => {
    //   if (user) {
    //     this.userService.setCurrentUser(user);
    //   } else {
    //     this.userService.setCurrentUser = undefined;
    //   }
    // });
  }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(
      (result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
        this.userService.setUserData();
        this.router.navigate(['/account']);
      },
      (err) => {
        if (err.code === 'auth/wrong-password') {
          alert('Invalid Email/Password');
        } else {
          alert('Something went wrong! Please try again');
        }
        this.router.navigate(['/']);
      }
    );
  }

  async signUp(email: string, password: string, name: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(
        (result: firebase.auth.UserCredential) => {
          result.user?.updateProfile({ displayName: name });
          localStorage.setItem('user', JSON.stringify(result.user));
          this.userService.setUserData();
          this.router.navigate(['/account']);
        },
        (err) => {
          alert('Authentication Failed! : ' + err.message);
          this.router.navigate(['/']);
        }
      );
  }

  async logOut() {
    await this.firebaseAuth.signOut().then(
      () => {
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      },
      (err) => {
        alert('Logout Failed!');
        this.router.navigate(['/account']);
      }
    );
  }
}
