import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../login/dto/login-dto';

import { Router } from "@angular/router";

//Auth and database
import * as authentication from 'firebase/auth'
import { collection, addDoc, doc, getDoc, Firestore } from "firebase/firestore";
import { getAuth, signOut, User, UserCredential } from "firebase/auth";
import { AlertsToastr } from "src/app/company/shared/services/operations/alerts-toastr";
import { FireBaseDbService } from "src/app/company/shared/services/operations/fire-base-db.service";
import { RegisterDto } from "src/app/company/shared/authentication/register/dto/register-dto";
import { BackEnd } from '../../services/operations/back-end';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';


@Injectable()
export class AuthService {

  private _formMain: FormGroup;

  private userData: any;


  private currentUserSubject = new BehaviorSubject<authentication.User>(JSON.parse(localStorage.getItem('usr')));

  constructor(
    protected Http: HttpClient,
    // private _Afs: AngularFirestore,
    // private _Afa: AngularFireAuth,
    private _Fb: FormBuilder,
    private _FireBaseDbService: FireBaseDbService,
    private _AlertsToastr: AlertsToastr,
    private _Router: Router,
  ) {
    // this._Afa.authState.subscribe((usr) => {
    //   if (usr) {
    //     this.userData = usr;
    //     localStorage.setItem('usr', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('usr')!);
    //   } else {
    //     localStorage.setItem('usr', null);
    //     JSON.parse(localStorage.getItem('usr')!);
    //   }
    // })
  }



  get getForm() {
    return this._formMain
  }

  formLoad() {
    return this._formMain = this._Fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

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

  // async addUserRegister(user: RegisterDto): Promise<string> {
  //   let idReturn: string = '';

  //   try {
  //     const docRef = await addDoc(collection(this._FireBaseDbService.dbLoad(), "users_details"), {
  //       "userName": user.userName,
  //       "email": user.email,
  //       "fullName": user.fullName,
  //     });
  //     idReturn = docRef.id;
  //     return idReturn;
  //   } catch (e) {

  //   }
  //   return idReturn
  // }

  // async updateDisplayName(id: string, usr: UserCredential) {
  //   const docRef = doc(this._FireBaseDbService.dbLoad(), "/users_details", id);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {

  //     authentication.updateProfile(usr.user, { displayName: docSnap.get('userName') })

  //     return docSnap.get('userName');
  //   }

  // }

  registerUser() {
    const register: RegisterDto = { ...this._formMain.value }
    const auth = getAuth();

    authentication.createUserWithEmailAndPassword(auth, register.email, register.password)
      .then((res) => {

        delete register.password;
        delete register.confirmPassword;


       this.setUserData(res, register.userName);

        this._Router.navigateByUrl('/login');

        this._AlertsToastr.Notice(`Usuário,  ${register.userName}`, 0, 'success');


      }).catch((err: Error) => {
        console.log(err)
        // this._AlertsToastr.Notice(`Usuário,  ${register.userName}`, 5, 'error');
      })

  }

  //#endregion


  login(login: LoginDto) {
    const auth = getAuth();
    authentication.signInWithEmailAndPassword(auth, login.email, login.password)
      .then((result: UserCredential) => {
       this._AlertsToastr.Notice(`Usuário,  ${auth.currentUser.displayName}`, 5, 'success');
        localStorage.setItem('usr', JSON.stringify(auth.currentUser));
        //window.location.reload();



        // console.log('AQUI', result.user);


      }).catch((error: Error) => {
       // this._AlertsToastr.Notice(`Usuário,  ${auth.currentUser.displayName}`, 5, 'error');
        console.log(error)
      }
      )
  }


  setUserData(_user: UserCredential, displayName: string) {
    authentication.updateProfile(_user.user, {displayName:displayName})
}
  logOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this._AlertsToastr.Notice(`${JSON.parse(localStorage.getItem('usr')).displayName} Até Mais...`, 5, 'success');
        localStorage.removeItem('usr');
        this._Router.navigateByUrl('/login');
        //window.location.reload();
      }).catch((error: Error) => {
     //   this._AlertsToastr.Notice(`Usuário,  ${JSON.parse(localStorage.getItem('usr')).displayName}`, 5, 'error');
        localStorage.removeItem('usr');
       // window.location.reload();
      });

}




  // isLogged(): authentication.User {
  //   const auth = getAuth();
  //   authentication?.onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       return user;
  //     } else {
  //       // No user is signed in.
  //       return user;
  //     }

  //   });
  //   return null;

  // }


  public get currentUserValue(): authentication.User {
    return this.currentUserSubject.value;
  }





















}
