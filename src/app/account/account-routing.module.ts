import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AccountDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
