import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxModule } from "./ngx.module";

// import { ClientModule } from "src/app/company/main-components/Client/modules/client.module";
import { AddressComponent } from "../shareds-components/address/address.component";
import { ContactComponent } from "../shareds-components/contact/contact.component";
import { GeneralRegistersComponent } from "../shareds-components/general-registers/general-registers.component";
import { WelcomeDashComponent } from "../shareds-components/welcome-dash/welcome-dash.component";
import { NavMainComponent } from "../shareds-components/nav-main/nav-main.component";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    WelcomeDashComponent,
    GeneralRegistersComponent,
    ContactComponent,
    AddressComponent,
    NavMainComponent,



  ],
  imports: [
    NgxModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,


  ],
  exports: [
    NgxModule,
    GeneralRegistersComponent,
    ContactComponent,
    AddressComponent,
    NavMainComponent,


  ],
  providers: []
})

export class SharedModule {

}
