import { Injectable } from "@angular/core";
import { Form, FormArray, FormControl } from "@angular/forms";
import { FormArrayName, FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { getDocs, addDoc, collection, Timestamp, where, query } from "firebase/firestore";

import { doc, getDoc } from "firebase/firestore";
import { AccountDto } from "../dto/account-dto";
import { Observable, of } from 'rxjs'
import { FireBaseDbService } from "src/app/company/modules/core/services/back-end/fire-base-db.service";
import { AlertsToastr } from "src/app/company/modules/shared/helpers/services/operations/alerts-toastr";
import { ValidatorsGlobal } from "src/app/company/modules/shared/helpers/services/operations/validators-global";


@Injectable({
  providedIn: 'root'
})

export class AccountListService {

  constructor(
    private _Fb: FormBuilder,
    private _FireBaseDbService: FireBaseDbService,
    private _AlertsToastr: AlertsToastr,
    private _Router: Router,
    private _Validator: ValidatorsGlobal,
  ) { }

  async loadCardById() {

    const docRef = doc(this._FireBaseDbService.dbLoad(), "checkingAccounts", "HzDykbK03JXiH3GGRghx");


    const docSnap = await getDoc<any>(docRef);
    console.log(docSnap)

    if (docSnap.exists()) {
      console.log("DOC AQUI, Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  }



  // const querySnapshot = await getDocs(collection(db, "cities"));
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });


  async loadAllCards() {
    let result =[];
    const querySnapshot = await getDocs(collection(this._FireBaseDbService.dbLoad(), "checkingAccounts"));
    querySnapshot.forEach((doc) => {


      result.push(doc.data());



      // console.log(doc.id, " => ", doc.data());
    });

    console.log('DEU TOP', result[0])

    // let getEn: AccountDto[];

    // try {

    //   const getAll = await getDocs(collection(this._FireBaseDbService.dbLoad(), "checkingAccounts"));

    //   console.log(getAll.docs.map(x => x).values())




    // }
    // catch {
    //   console.log(Error);
    // }
    // return getEn;


  }




}
