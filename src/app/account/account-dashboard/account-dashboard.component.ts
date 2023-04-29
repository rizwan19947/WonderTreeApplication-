import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../@core/services/user.service';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { FirebaseService } from '../../@core/services/firebase.service';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss'],
})
export class AccountDashboardComponent implements OnInit {
  isMobile$: Observable<boolean> | undefined;

  constructor(
    private userService: UserService,
    private observer: BreakpointObserver,
    private firebaseService: FirebaseService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isMobile$ = this.observer
      .observe('(max-width: 575px)')
      .pipe(map((value) => value.matches));

    console.warn(JSON.parse(this.userService.currentUser));
  }

  signOut() {
    this.firebaseService.logOut().then(() => {
      window.location.reload();
    });
  }
}
