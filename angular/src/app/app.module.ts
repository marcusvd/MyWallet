import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import * as firebase from 'firebase/app';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductModule } from './company/main-components/product/modules/product.module';
import { NgxModule } from './company/shared/modules/ngx.module';
import { SharedModule } from './company/shared/modules/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BankModule } from './company/main-components/bank/modules/bank.module';

import { FlowModule } from './company/main-components/flows/module/flow.module';

import { getAnalytics } from "firebase/analytics";
import { LoginModule } from 'src/app/company/shared/authentication/login/modules/login.module';
import { RegisterModule } from 'src/app/company/shared/authentication/register/modules/register.module';
import { FireBaseDbService } from './company/shared/services/operations/fire-base-db.service';
import { AuthenticationModule } from './company/shared/authentication/auth/module/authentication.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxModule,
    ProductModule,
    BankModule,
    FlowModule,
    LoginModule,
    RegisterModule,
    AuthenticationModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TooltipModule.forRoot()
  ],
  providers: [FireBaseDbService],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule  {}
