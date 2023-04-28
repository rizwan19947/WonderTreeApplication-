import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [AccountDashboardComponent],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
