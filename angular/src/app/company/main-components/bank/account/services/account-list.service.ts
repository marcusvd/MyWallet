import { Injectable } from "@angular/core";
import { Form, FormArray, FormControl } from "@angular/forms";
import { FormArrayName, FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { getDocs, addDoc, collection, Timestamp } from "firebase/firestore";
import { AlertsToastr } from "src/app/company/shared/services/operations/alerts-toastr";

import { ValidatorsGlobal } from "src/app/company/shared/services/operations/validators-global";
import { SocialNetworkDto } from "src/app/company/shared/shareds-components/contact/dto/social-network-dto";
import { CardDto } from "../dto/card-dto";

import { doc, getDoc } from "firebase/firestore";
import { FireBaseDbService } from "src/app/company/shared/services/operations/fire-base-db.service";
import { AccountDto } from "../dto/account-dto";
import { Observable, of } from 'rxjs'

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
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
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

    let getEn: AccountDto[];

    try {

      const getAll = await getDocs(collection(this._FireBaseDbService.dbLoad(), "checkingAccounts"));


      getAll.forEach((doc) => {




        const EntitiesInJSON = JSON.stringify(doc.data());

          console.log(doc.data())


        //   getEn.push(fff)
        // const entity = JSON.parse(EntitiesInJSON) as AccountDto;
        // const objToReturn: AccountDto = {
        //   institution:entity.institution,
        //   holder:entity.holder,
        //   agency:entity.agency,
        //   account:entity.account,
        //   pix:entity.pix,
        //   typeaccount:entity.typeaccount,
        //   description:entity.description,
        //   cards: entity.cards
        // }

        // // let Acc: AccountDto[] = [];

        // getEn = [];
        // getEn.push(objToReturn);
        // console.log(getEn)
        // console.log(Acc.pipe);
        // getEn.forEach(test => {
        // })


        // getEn = Acc;
        //  Acc.forEach((i: AccountDto)=>{console.log(i.institution)});

        // getEn = [JSON.parse(EntitiesInJSON)];


      })
      return getEn;
    }
    catch {
      console.log(Error);
    }
    return getEn;


  }




}
