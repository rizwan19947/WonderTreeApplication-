import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AccountAnalyticsComponent } from './account-analytics/account-analytics.component';
import { CoreModule } from '../@core/core.module';

@NgModule({
  declarations: [
    AccountDashboardComponent,
    AccountProfileComponent,
    AccountAnalyticsComponent,
  ],
  imports: [CommonModule, AccountRoutingModule, CoreModule],
})
export class AccountModule {}
