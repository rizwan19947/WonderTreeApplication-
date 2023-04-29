import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { FirebaseService } from './@core/services/firebase.service';
import { UserService } from './@core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isMobile$: Observable<boolean> | undefined;

  constructor(
    private observer: BreakpointObserver,
    private firebaseService: FirebaseService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.isMobile$ = this.observer
      .observe('(max-width: 575px)')
      .pipe(map((value) => value.matches));
  }

  signOut() {
    this.firebaseService.logOut().then(() => {
      window.location.reload();
    });
  }
}
