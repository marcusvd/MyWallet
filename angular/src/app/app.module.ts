import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { FlowModule } from './company/components/flows/module/flow.module';
import { BankModule } from './company/components/bank/modules/bank.module';
import { ProductModule } from './company/components/product/modules/product.module';
import { NgxModule } from './company/modules/shared/modules/ngx.module';
import { CoreModule } from './company/modules/core/modules/core.module';
import { FireBaseDbService } from './company/modules/core/services/back-end/fire-base-db.service';
import { SharedModule } from './company/modules/shared/modules/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //native
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Outsourced
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    //Main
    CoreModule,
    SharedModule,
    NgxModule,
    //Features
    ProductModule,
    BankModule,
    FlowModule,



  ],
  providers: [
    FireBaseDbService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
