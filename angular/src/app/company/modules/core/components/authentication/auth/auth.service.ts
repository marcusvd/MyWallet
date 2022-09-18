import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

//FireBase
import { getAuth, signOut, User, UserCredential } from "firebase/auth";
import * as authentication from 'firebase/auth'
import { collection, addDoc, doc, getDoc, Firestore } from "firebase/firestore";
//
import { LoginDto } from '../login/dto/login-dto';
import { FireBaseDbService } from '../../../services/back-end/fire-base-db.service';
import { AlertsToastr } from 'src/app/company/modules/shared/helpers/services/operations/alerts-toastr';
import { RegisterDto } from '../register/dto/register-dto';


@Injectable()
export class AuthService {

  private _formMain: FormGroup;
  private _loggedUser?: authentication.User;

  constructor(
    protected Http: HttpClient,
    private _Fb: FormBuilder,
    private _FireBaseDbService: FireBaseDbService,
    private _AlertsToastr: AlertsToastr,
    private _Router: Router,
  ) {
    this._loggedUser = JSON.parse(localStorage.getItem('usr'));
  }
//#region Form
  get getForm() {
    return this._formMain
  }

  formLoad() {
    return this._formMain = this._Fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
  //#endregion

//#region Register

  get getFormRegister() {
    return this._formMain
  }

  formLoadRegister() {
    return this._formMain = this._Fb.group({
      email: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })
  }


  registerUser() {
    const register: RegisterDto = { ...this._formMain.value }
    const auth = getAuth();

    authentication.createUserWithEmailAndPassword(auth, register.email, register.password)
      .then((res) => {

        delete register.password;
        delete register.confirmPassword;

        authentication.updateProfile(res.user, { displayName: register.userName })
        this._Router.navigateByUrl('/login');
        this._AlertsToastr.Notice(`Usuário,  ${register.userName}`, 0, 'success');

      }).catch((err: Error) => {
        console.log(err)
        // this._AlertsToastr.Notice(`Usuário,  ${register.userName}`, 5, 'error');
      })

  }

  //#endregion

//#region Login
  login(login: LoginDto) {
    const auth = getAuth();
    authentication.signInWithEmailAndPassword(auth, login.email, login.password)
      .then((result: UserCredential) => {
        this._AlertsToastr.Notice(`Usuário,  ${auth.currentUser.displayName}`, 5, 'success');
        localStorage.setItem('usr', JSON.stringify(result));
        //window.location.reload();
      //this.setUserData(result.user);
        this.loggedInUser = result.user;

        // console.log('AQUI', result.user);


      }).catch((error: Error) => {
        // this._AlertsToastr.Notice(`Usuário,  ${auth.currentUser.displayName}`, 5, 'error');
        console.log(error)
      }
      )
  }
  get loggedInUser(): authentication.User {
    return this._loggedUser;
  }

  set loggedInUser(u: authentication.User) {
    this._loggedUser = u;
  }


  logOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this._AlertsToastr.Notice(`${JSON.parse(localStorage.getItem('usr')).displayName} Até Mais...`, 5, '');
        this.loggedInUser = null;
        localStorage.removeItem('usr');
        this._Router.navigateByUrl('/login');
      }).catch((error: Error) => {
        //   this._AlertsToastr.Notice(`Usuário,  ${JSON.parse(localStorage.getItem('usr')).displayName}`, 5, 'error');
        localStorage.removeItem('usr');
      });
  }

//#endregion














}
