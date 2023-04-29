import { Component, OnInit } from '@angular/core';
import { UserService } from '../../@core/services/user.service';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss'],
})
export class AccountDashboardComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.warn(JSON.parse(this.userService.currentUser));
  }
}
