import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/company/shared/modules/shared.module';
import { NgxModule } from 'src/app/company/shared/modules/ngx.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxModule,
    RouterModule,
  ],
  declarations: [LoginComponent],
  providers:[]
})
export class LoginModule { }
