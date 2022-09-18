import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './company/components/bank/account/create/account-create.component';
import { AccountListComponent } from './company/components/bank/account/list/account-list.component';
import { NavBankComponent } from './company/components/bank/account/nav-bank/nav-bank.component';
import { InOutCreateComponent } from './company/components/flows/in-out/in-out-create.component';
import { FinancialRegisterCreateComponent } from './company/components/flows/register/financial-register-create.component';
import { LoginComponent } from './company/modules/core/components/authentication/login/login.component';
import { RegisterComponent } from './company/modules/core/components/authentication/register/register.component';
import { WelcomeDashComponent } from './company/modules/shared/components/welcome-dash/components/welcome-dash.component';


const routes: Routes = [


  { path: 'operations', component: FinancialRegisterCreateComponent },
  { path: 'inout', component: InOutCreateComponent },
  {
    path: 'bank', component: NavBankComponent, children: [
      { path: 'create', component: AccountCreateComponent },
      { path: 'list', component: AccountListComponent },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcomedash', component: WelcomeDashComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
