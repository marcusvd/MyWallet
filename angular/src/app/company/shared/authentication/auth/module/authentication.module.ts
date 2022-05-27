import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/company/shared/modules/shared.module';
import { NgxModule } from 'src/app/company/shared/modules/ngx.module';
import { RouterModule } from '@angular/router';

import { AlertsToastr } from 'src/app/company/shared/services/operations/alerts-toastr';
import { AuthService } from '../auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxModule,
    RouterModule,
  ],
  declarations: [],
  providers:[AuthService, AlertsToastr]
})
export class AuthenticationModule { }
