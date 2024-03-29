import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterService } from '../register/services/register.service';
import { LoginDto } from './dto/login-dto';
import { RegisterDto } from '../register/dto/register-dto';
import { AuthService } from '../auth/auth.service';
import { doc, getDoc } from 'firebase/firestore';

//Auth and database
import * as authentication from 'firebase/auth'
import { getAuth, User } from 'firebase/auth';
import { ValidatorsGlobal } from 'src/app/company/modules/shared/helpers/services/operations/validators-global';
import { FireBaseDbService } from '../../../services/back-end/fire-base-db.service';




@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _Login: AuthService,
    private _Register: RegisterService,
    private _Validator: ValidatorsGlobal,
    private _FireBaseDbService: FireBaseDbService,
  ) { }



  login() {

    this._Login.login(this.form.value as LoginDto);
  }

  nameToShowNav() {


    // const result = JSON.parse(localStorage.getItem('usr')) as User;

    // return result.email

    };





  // test() {
  //   const auth = getAuth();
  //   authentication.onAuthStateChanged(auth, function (user) {
  //     if (user) {
  //       // User is signed in.
  //       console.log(user.displayName);
  //     } else {
  //       // No user is signed in.
  //       console.log('tem')
  //     }
  //   });
  // }




  get form(): FormGroup {
    return this._Login.getForm;
  }

  required(form: FormGroup, ctrl: string, ctrlToShow: string, lengthMin?: number, lengthMax?: number) {
    return this._Validator.required(form,
      ctrl,
      ctrlToShow,
      lengthMin,
      lengthMax
    )
  }
  touchedErrors(ctrl: string, formGroup: FormGroup) {
    return this._Validator.touchedErrors(ctrl,
      formGroup,
    )
  }


  ngOnInit(): void {

    this._Login.formLoad();
  }

}
