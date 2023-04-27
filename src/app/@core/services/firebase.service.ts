import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export interface User {
  userId: string;
  userEmail: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  user: User | null = null;
  private isLoggedIn: boolean = false;

  constructor(public firebaseAuth: AngularFireAuth) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.user = {
          userId: user.uid,
          userEmail: user.email,
        };
      } else {
        this.user = null;
      }
    });
  }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  async signUp(email: string, password: string, name: string) {
    const result = await this.firebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    await result.user?.updateProfile({ displayName: name });
  }

  async logOut() {
    await this.firebaseAuth.signOut();
  }
}
