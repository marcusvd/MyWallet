import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxModule } from "src/app/company/shared/modules/ngx.module";
import { SharedModule } from "src/app/company/shared/modules/shared.module";
import { InOutCreateService } from '../in-out/services/in-out-create.service';

import { RegisterCreateService } from '../register/services/register-create.service';
import { RegisterCreateComponent } from '../register/register-create.component';
import { InOutCreateComponent } from '../in-out/in-out-create.component';

@NgModule({
  declarations: [
    RegisterCreateComponent,
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
  providers: [InOutCreateService, RegisterCreateService]
})
export class FlowModule { }
