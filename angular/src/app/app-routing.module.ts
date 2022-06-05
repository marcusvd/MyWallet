import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './company/main-components/bank/account/create/account-create.component';
import { FinancialRegisterCreateComponent } from 'src/app/company/main-components/flows/register/financial-register-create.component';
import { ProductCreateComponent } from './company/main-components/product/product-create/product-create.component';
import { ProductNavComponent } from './company/main-components/product/product-nav/product-nav.component';
import { AddressComponent } from './company/shared/shareds-components/address/address.component';
import { ContactComponent } from './company/shared/shareds-components/contact/contact.component';
import { GeneralRegistersComponent } from './company/shared/shareds-components/general-registers/general-registers.component';
import { InOutCreateComponent } from './company/main-components/flows/in-out/in-out-create.component';
import { LoginComponent } from 'src/app/company/shared/authentication/login/login.component';
import { RegisterComponent } from 'src/app/company/shared/authentication/register/register.component';
import { WelcomeDashComponent } from './company/shared/shareds-components/welcome-dash/welcome-dash.component';
import { NavBankComponent } from './company/main-components/bank/account/nav-bank/nav-bank.component';
import { AccountListComponent } from './company/main-components/bank/account/list/account-list.component';

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
