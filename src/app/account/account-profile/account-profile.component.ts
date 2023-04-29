import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { UserService } from '../../@core/services/user.service';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss'],
})
export class AccountProfileComponent implements OnInit {
  user: firebase.User;

  constructor(private userService: UserService) {
    this.user = this.userService.currentUser;
  }

  ngOnInit(): void {}
}
