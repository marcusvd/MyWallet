import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrComponentlessModule } from "ngx-toastr";
import { BackEnd } from "src/app/company/shared/services/operations/back-end";
import { RegisterDto } from "../dto/register-dto";

import * as authentication from 'firebase/auth'
import { getDatabase, ref, onValue, set } from "firebase/database";


import { getAuth } from "firebase/auth";
import { AlertsToastr } from "src/app/company/shared/services/operations/alerts-toastr";
import { Router } from "@angular/router";

@Injectable()
export class RegisterService extends BackEnd<RegisterDto, number> {

  private _formMain: FormGroup;

  constructor(
    protected Http: HttpClient,
    private _Fb: FormBuilder,
    private _AlertsToastr: AlertsToastr,
    private _Router: Router,
  ) {
    super(Http, '')
  }

  get getForm() {
    return this._formMain
  }

  formLoad() {
    return this._formMain = this._Fb.group({
      email: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })
  }
  registerUsr() {

  }





  save() {
    const register: RegisterDto = { ...this._formMain.value }
    const auth = getAuth();
    const db = getDatabase();
    const reference = ref(db, `users_details/${btoa(register.email)}`)

    authentication.createUserWithEmailAndPassword(auth, register.email, register.password)
      .then((res: any) => {
        this._Router.navigateByUrl('/login');
        delete register.password;
        delete register.confirmPassword;

        set(reference, {
          userName: register.userName,
          fullName: register.fullName
        })
        this._AlertsToastr.Notice(`Usuário,  ${register.userName}`, 0, 'success');


      }).catch((err: Error) => {
        this._AlertsToastr.Notice(`Usuário,  ${register.userName}`, 5, 'error');
      })

  }




}
