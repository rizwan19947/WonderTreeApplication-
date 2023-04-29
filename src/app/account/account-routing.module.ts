import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountGuard } from '../@core/guards/account-guard.service';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AccountAnalyticsComponent } from './account-analytics/account-analytics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AccountGuard],
    component: AccountDashboardComponent,
  },
  {
    path: 'profile',
    canActivate: [AccountGuard],
    component: AccountProfileComponent,
  },
  {
    path: 'analytics',
    canActivate: [AccountGuard],
    component: AccountAnalyticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
