import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { InOutCreateService } from '../in-out/services/in-out-create.service';

import { FinancialRegisterCreateService } from '../register/services/financial-register-create.service';
import { FinancialRegisterCreateComponent } from '../register/financial-register-create.component';
import { InOutCreateComponent } from '../in-out/in-out-create.component';
import { SharedModule } from 'src/app/company/modules/shared/modules/shared.module';
import { NgxModule } from 'src/app/company/modules/shared/modules/ngx.module';

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
