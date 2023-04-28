import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../@core/services/firebase.service';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss'],
})
export class AccountDashboardComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {}
}
