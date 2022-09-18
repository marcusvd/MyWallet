import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

//Auth and database
import * as authentication from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


import { RegisterDto } from "../dto/register-dto";
import { AlertsToastr } from "src/app/company/modules/shared/helpers/services/operations/alerts-toastr";
import { FireBaseDbService } from "../../../../services/back-end/fire-base-db.service";
import { BackEnd } from "../../../../services/back-end/back-end";




@Injectable()
export class RegisterService extends BackEnd<RegisterDto, number> {

  private _formMain: FormGroup;



  constructor(
    protected Http: HttpClient,
    private _Fb: FormBuilder,
    private _AlertsToastr: AlertsToastr,
    private _Router: Router,
    private _FireBaseDbService: FireBaseDbService

  ) {
    super(Http, '')
  }

  // get getForm() {
  //   return this._formMain
  // }

  formLoad() {
    return this._formMain = this._Fb.group({
      email: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })
  }

  async addUserRegister(user: RegisterDto) {

    try {
      const docRef = await addDoc(collection(this._FireBaseDbService.dbLoad(), "users_details"), {
        "userName": user.userName,
        "email": user.email,
        "fullName": user.fullName,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }


  }

  registerUser() {
    const register: RegisterDto = { ...this._formMain.value }
    const auth = getAuth();

    authentication.createUserWithEmailAndPassword(auth, register.email, register.password)
      .then(function (res) {

        delete register.password;
        delete register.confirmPassword;

        this.addUserRegister(register);

        this._Router.navigateByUrl('/login');

      }).catch((err: Error) => {
        this._AlertsToastr.Notice(`Usuário,  ${register.userName}`, 5, 'error');
      })

  }




}
