import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxModule } from "src/app/company/shared/modules/ngx.module";
import { SharedModule } from "src/app/company/shared/modules/shared.module";
import { AccountCreateComponent } from '../account/account-create.component';
import { AccountCreateService } from '../account/services/account-create.service';

@NgModule({
  declarations: [
    AccountCreateComponent

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
  providers: [AccountCreateService]
})
export class BankModule { }
