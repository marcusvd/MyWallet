import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './company/main-components/client/modules/client.module';
import { ProductModule } from './company/main-components/product/modules/product.module';
import { NgxModule } from './company/shared/modules/ngx.module';
import { SharedModule } from './company/shared/modules/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BankModule } from './company/main-components/bank/modules/bank.module';
import { FlowModule } from './company/main-components/flows/module/flow.module';








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
    ClientModule,
    ProductModule,
    BankModule,
    FlowModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
