import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxModule } from "src/app/company/shared/modules/ngx.module";
import { SharedModule } from "src/app/company/shared/modules/shared.module";
import { AccountCreateComponent } from '../account/create/account-create.component';
import { AccountCreateService } from '../account/services/account-create.service';
import { NavBankComponent } from '../account/nav-bank/nav-bank.component';
import { AccountListComponent } from '../account/list/account-list.component';
import { AccountListService } from '../account/services/account-list.service';

@NgModule({
  declarations: [
    AccountCreateComponent,
    AccountListComponent,
    NavBankComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxModule,
    RouterModule,
  ],
  exports: [

  ],
  providers: [
    AccountCreateService,
    AccountListService
  ]
})
export class BankModule { }
