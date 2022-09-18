import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AlertsToastr } from "../../shared/helpers/services/operations/alerts-toastr";
import { NgxModule } from "../../shared/modules/ngx.module";
import { AuthService } from "../components/authentication/auth/auth.service";

import { LoginComponent } from "../components/authentication/login/login.component";
import { RegisterComponent } from "../components/authentication/register/register.component";
import { RegisterService } from "../components/authentication/register/services/register.service";


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCrXv3qP5nhnVomv5TwjWXUuiF0XOcEokE",
      authDomain: "mybrwallet.firebaseapp.com",
      projectId: "mybrwallet",
      storageBucket: "mybrwallet.appspot.com",
      messagingSenderId: "388230143313",
      appId: "1:388230143313:web:aadf3da852462fb5c18770",
      measurementId: "G-7YE35WZY7C"
    })
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    AlertsToastr,
    AngularFirestore,
    AngularFireAuth,
    RegisterService,
  ]
})

export class CoreModule {

}
