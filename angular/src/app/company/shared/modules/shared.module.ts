import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxModule } from "./ngx.module";

// import { ClientModule } from "src/app/company/main-components/Client/modules/client.module";
import { ClientCreateComponent } from "src/app/company/main-components/client/client-create/client-create.component";
import { AddressComponent } from "../shareds-components/address/address.component";
import { ContactComponent } from "../shareds-components/contact/contact.component";
import { GeneralRegistersComponent } from "../shareds-components/general-registers/general-registers.component";



@NgModule({
  declarations: [
    GeneralRegistersComponent,
    ContactComponent,
    AddressComponent



  ],
  imports: [
    NgxModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule


  ],
  exports: [
    GeneralRegistersComponent,
    ContactComponent,
    AddressComponent,

  ],
  providers: []
})

export class SharedModule {

}
