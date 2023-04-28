import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountGuard } from '../@core/guards/account-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AccountGuard],
    component: AccountDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
