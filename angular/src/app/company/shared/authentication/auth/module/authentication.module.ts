import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/company/shared/modules/shared.module';
import { NgxModule } from 'src/app/company/shared/modules/ngx.module';
import { RouterModule } from '@angular/router';

import { AlertsToastr } from 'src/app/company/shared/services/operations/alerts-toastr';
import { AuthService } from '../auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxModule,
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
  declarations: [],
  providers: [
    AuthService,
    AlertsToastr,
    AngularFirestore,
    AngularFireAuth
  ]
})
export class AuthenticationModule { }
