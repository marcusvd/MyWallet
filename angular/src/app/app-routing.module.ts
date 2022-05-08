import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './company/main-components/bank/account/account-create.component';
import { ClientCreateComponent } from './company/main-components/client/client-create/client-create.component';
import { ClientListComponent } from './company/main-components/client/client-list/client-list.component';
import { ClientNavComponent } from './company/main-components/client/client-nav/client-nav.component';
import { RegisterCreateComponent } from 'src/app/company/main-components/flows/register/register-create.component';
import { ProductCreateComponent } from './company/main-components/product/product-create/product-create.component';
import { ProductNavComponent } from './company/main-components/product/product-nav/product-nav.component';
import { AddressComponent } from './company/shared/shareds-components/address/address.component';
import { ContactComponent } from './company/shared/shareds-components/contact/contact.component';
import { GeneralRegistersComponent } from './company/shared/shareds-components/general-registers/general-registers.component';
import { InOutCreateComponent } from './company/main-components/flows/in-out/in-out-create.component';

const routes: Routes = [


  { path: 'operations', component: RegisterCreateComponent },
  { path: 'inout', component: InOutCreateComponent },
  { path: 'account', component: AccountCreateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
