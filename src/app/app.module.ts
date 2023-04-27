import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { getFirestore, Firestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export const FirestoreInstance = new InjectionToken<Firestore>(
  'FirestoreInstance'
);

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    AngularFireModule,
    AngularFireAuthModule,
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: FirestoreInstance, useFactory: getFirestore, deps: [getApp] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
