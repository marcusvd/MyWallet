import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SharedModule } from "./shared.module";
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import { MASKOPTIONS } from "../helpers/simples-helpers";


const options: Partial<IConfig> | (() => Partial<IConfig>) = {
  validation: false,
}

@NgModule({
  declarations: [],
  imports: [
    TabsModule.forRoot(),
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(options),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    CurrencyMaskModule,
    BrowserAnimationsModule,
  ],
  exports: [
    TabsModule,
    NgxMaskModule,
    CurrencyMaskModule,
    BsDatepickerModule,
    BsDropdownModule,
    TooltipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [    { provide: CURRENCY_MASK_CONFIG, useValue: MASKOPTIONS }]
})

export class NgxModule {

}
