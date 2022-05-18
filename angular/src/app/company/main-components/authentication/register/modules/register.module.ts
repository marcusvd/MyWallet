import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/company/shared/modules/shared.module';
import { NgxModule } from 'src/app/company/shared/modules/ngx.module';
import { RouterModule } from '@angular/router';

import { RegisterService } from '../services/register.service';
import { RegisterComponent } from '../register.component';
import { AlertsToastr } from 'src/app/company/shared/services/operations/alerts-toastr';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxModule,
    RouterModule,
  ],
  declarations: [RegisterComponent],
  providers:[RegisterService, AlertsToastr]
})
export class RegisterModule { }
