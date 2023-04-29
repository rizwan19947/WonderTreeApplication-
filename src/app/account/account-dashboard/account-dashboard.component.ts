import { Component, OnInit } from '@angular/core';
import { UserService } from '../../@core/services/user.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss'],
})
export class AccountDashboardComponent implements OnInit {
  user: firebase.User;

  constructor(private userService: UserService) {
    this.user = this.userService.currentUser;
  }

  ngOnInit(): void {}
}
