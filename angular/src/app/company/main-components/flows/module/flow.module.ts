import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxModule } from "src/app/company/shared/modules/ngx.module";
import { SharedModule } from "src/app/company/shared/modules/shared.module";
import { InOutCreateService } from '../in-out/services/in-out-create.service';

import { FinancialRegisterCreateService } from '../register/services/financial-register-create.service';
import { FinancialRegisterCreateComponent } from '../register/financial-register-create.component';
import { InOutCreateComponent } from '../in-out/in-out-create.component';

@NgModule({
  declarations: [
    FinancialRegisterCreateComponent,
    InOutCreateComponent

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
  providers: [InOutCreateService, FinancialRegisterCreateService]
})
export class FlowModule { }
