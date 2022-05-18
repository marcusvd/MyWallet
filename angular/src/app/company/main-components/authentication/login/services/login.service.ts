import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BackEnd } from "src/app/company/shared/services/operations/back-end";
import { LoginDto } from "../dto/login-dto";
import * as firebase from 'firebase/auth'
@Injectable()
export class LoginService extends BackEnd<LoginDto, number>{

  private _formMain: FormGroup;

  constructor(
    protected Http: HttpClient,
    private _Fb: FormBuilder
  ) {
    super(Http, '')
  }

 get getForm(){
    return this._formMain
  }

  formLoad() {
    return this._formMain = this._Fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }




}
