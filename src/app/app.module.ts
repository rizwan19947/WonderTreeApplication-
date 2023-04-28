import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { getFirestore, Firestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { HomeModule } from './home/home.module';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const FirestoreInstance = new InjectionToken<Firestore>(
  'FirestoreInstance'
);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HomeModule,
  ],
  providers: [
    { provide: FirestoreInstance, useFactory: getFirestore, deps: [getApp] },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
