import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";

import { NgxModule } from "src/app/company/shared/modules/ngx.module";
import { SharedModule } from "src/app/company/shared/modules/shared.module";
import { ClientCreateComponent } from "../client-create/client-create.component";
import { ClientNavComponent } from "../client-nav/client-nav.component";
import { ClientListComponent } from "../client-list/client-list.component";
import { ClientCreateServices } from "../services/client-create.service";
import { AlertsToastr } from "src/app/company/shared/services/operations/alerts-toastr";


@NgModule({
  declarations: [
    ClientCreateComponent,
    ClientListComponent,
    ClientNavComponent,
  ],
  imports: [
    CommonModule,
    NgxModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [ClientCreateServices, AlertsToastr],
  exports:[],


})

export class ClientModule {

}
