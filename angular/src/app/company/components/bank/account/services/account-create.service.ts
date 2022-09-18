import { Injectable } from "@angular/core";
import { Form, FormArray, FormControl } from "@angular/forms";
import { FormArrayName, FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { FireBaseDbService } from "src/app/company/modules/core/services/back-end/fire-base-db.service";
import { AlertsToastr } from "src/app/company/modules/shared/helpers/services/operations/alerts-toastr";
import { ValidatorsGlobal } from "src/app/company/modules/shared/helpers/services/operations/validators-global";

import { CardDto } from "../dto/card-dto";


@Injectable({
  providedIn: 'root'
})

export class AccountCreateService {



  private _keys: any[] = [{ 'key': "CPF", 'selected': false }, { 'key': "CNPJ", 'selected': false }, { 'key': "CELULAR", 'selected': false }, { 'key': "E-MAIL", 'selected': false }]


  // { 'key':"CPF", 'selected': false }, {'key':"CNPJ", 'selected': false }, { 'key':"CELULAR", 'selected': false}, { 'key':"E-MAIL", 'selected': false }

  // private typeP: string;

  private _cards: CardDto[] = [];

  private _keyPix: any[] = [
    { 'id': '', 'key': 'CPF' },
    { 'id': '', 'key': 'CNPJ' },
    { 'id': '', 'key': 'CELULAR' },
    { 'id': '', 'key': 'E-MAIL' },
    { 'id': '', 'key': 'SELECIONE' },

  ]
  private _Card: FormGroup;
  private _formAccount: FormGroup;


  constructor(
    private _Fb: FormBuilder,
    private _FireBaseDbService: FireBaseDbService,
    private _AlertsToastr: AlertsToastr,
    private _Router: Router,
    private _Validator: ValidatorsGlobal,
  ) { }



  get pixType(): string[] {
    return this._keyPix;
  }


  get pixTypeSingle(): any[] {
    return this._keys;
  }


  async save(base: string, form: any) {
    let entity = form;

    entity.cards.forEach(item => {
      item.validate = Timestamp.fromDate(new Date(item.validate))
    })
    try {

      const docRef = await addDoc(collection(this._FireBaseDbService.dbLoad(), base), {
        institution: entity.institution,
        holder: entity.holder,
        agency: entity.agency,
        account: entity.account,
        pix: entity.pix,
        typeaccount: entity.typeaccount,
        description: entity.description,
        cards: entity.cards

      });
      //this._Router.navigateByUrl('/login');
      this._AlertsToastr.Notice(`Conta do banco, ${form.institution}`, 0, 'success');

      this._Card.reset();
      this._formAccount.reset();

      return docRef.id;
    } catch (e) {
      console.log(e);
    }
    return form;
  }

  get formGet(): FormGroup {
    return this._formAccount;
  }

  get socialNetwork(): CardDto[] {
    return this._cards
  }

  tPix(pix: string) {
    switch (pix) {
      case 'CPF':
        this._keys[0].selected = true
        this._keys[1].selected = false
        this._keys[2].selected = false
        this._keys[3].selected = false
        return this._keys
      case 'CNPJ':

        this._keys[1].selected = true
        this._keys[0].selected = false
        this._keys[2].selected = false
        this._keys[3].selected = false
        return this._keys

      case 'CELULAR':
        this._keys[2].selected = true
        this._keys[0].selected = false
        this._keys[1].selected = false
        this._keys[3].selected = false
        return this._keys

      case 'E-MAIL':
        this._keys[3].selected = true
        this._keys[0].selected = false
        this._keys[1].selected = false
        this._keys[2].selected = false
        return this._keys
    }
    this._keys[0].selected = false
    this._keys[1].selected = false
    this._keys[2].selected = false
    this._keys[3].selected = false
    return this._keys
  }

  formLoad(): FormGroup {
    return this._formAccount = this._Fb.group({
      institution: ['', []],
      holder: ['', []],
      agency: ['', []],
      account: ['', []],
      pix: ['', []],
      typeaccount: ['', []],
      description: ['', []],
      cards: this._Fb.array([]),
    });
  }

  card(): FormGroup {
    return this._Card = this._Fb.group({
      name: ['', []],
      flag: ['', []],
      numbercard: ['', []],
      checkcode: ['', []],
      typeaccount: ['', []],
      validate: ['', []],
      description: ['', []],
    })

  }

  get cardsControls() {
    return this._formAccount.controls['cards'] as FormArray;
  }

  addControls() {
    this.cardsControls.push(this.card());
  }

  removeControls(i: number) {
    this.cardsControls.removeAt(i);
  }
}
