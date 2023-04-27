import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isMobile$ = this.observer
      .observe('(max-width: 575px)')
      .pipe(map((value) => value.matches));
  }

  showSignInForm() {
    this.signIn = true;
    this.signUp = !this.signIn;
    this.cd.markForCheck();
    console.log(this.signIn);
    console.log(this.signUp);
  }

  showSignUpForm() {
    this.signUp = true;
    this.signIn = !this.signUp;
    this.cd.markForCheck();
    console.log(this.signIn);
    console.log(this.signUp);
  }

  back() {
    this.signIn = false;
    this.signUp = false;
  }

  doSignIn() {
    console.log('doing singin');
  }

  doSignUp() {
    console.log('doing singup');
  }

  ngOnDestroy(): void {
    this.breakpointSubscription?.unsubscribe();
  }
}
