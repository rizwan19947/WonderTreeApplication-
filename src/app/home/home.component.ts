import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../@core/services/firebase.service';
import { Router } from '@angular/router';
import { UserService } from '../@core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isMobile$: Observable<boolean> | undefined;
  signIn: boolean = false;
  signUp: boolean = false;

  signUpForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  signInForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  private breakpointSubscription: Subscription | undefined;

  constructor(
    private firebaseService: FirebaseService,
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.userService.isLoggedIn) {
      this.router.navigate(['account']);
    }
    this.isMobile$ = this.observer
      .observe('(max-width: 575px)')
      .pipe(map((value) => value.matches));
  }

  showSignInForm() {
    this.signIn = true;
    this.signUp = !this.signIn;
    this.cd.markForCheck();
  }

  showSignUpForm() {
    this.signUp = true;
    this.signIn = !this.signUp;
    this.cd.markForCheck();
  }

  back() {
    this.signIn = false;
    this.signUp = false;
  }

  async doSignIn() {
    console.log('doing singin');
    const formValues = this.signInForm.getRawValue();
    try {
      await this.firebaseService
        .signIn(formValues.email, formValues.password)
        .then(() => {
          this.router.navigate(['account']);
        });
    } catch (e) {
      console.error(e);
    }
  }

  async doSignUp() {
    console.log('doing singup');
    const formValues = this.signUpForm.getRawValue();
    try {
      await this.firebaseService
        .signUp(formValues.email, formValues.password, formValues.name)
        .then(() => {
          this.router.navigate(['account']);
        });
    } catch (e) {
      console.error(e);
    }
  }

  ngOnDestroy(): void {
    this.breakpointSubscription?.unsubscribe();
  }
}
