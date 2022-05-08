import { Injectable } from "@angular/core";
import { Form, FormArray, FormControl } from "@angular/forms";
import { FormArrayName, FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { SocialNetworkDto } from "src/app/company/shared/shareds-components/contact/dto/social-network-dto";
import { CardDto } from "../dto/card-dto";


@Injectable({
  providedIn: 'root'
})

export class AccountCreateService {


  private _keys: any[] = [{ 'key':"CPF", 'selected': false }, {'key':"CNPJ", 'selected': false }, { 'key':"CELULAR", 'selected': false}, { 'key':"E-MAIL", 'selected': false }]


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
  ) { }



  get pixType(): string[] {
    return this._keyPix;
  }


  get pixTypeSingle(): any[] {
    return this._keys;
  }
  // set pixIf(type: string) {
  //   this.typeP = type;
  // }


  get formGet(): FormGroup {
    return this._formAccount;
  }


  get socialNetwork(): CardDto[] {
    return this._cards
  }

  tPix(pix: string) {
    switch (pix) {
      case 'CPF':
        // this._CPF = true
        // this._CNPJ = false
        // this._CELULAR = false
        // this._EMAIL = false

        this._keys[0].selected = true
        this._keys[1].selected = false
        this._keys[2].selected = false
        this._keys[3].selected = false


        console.log(this._keys)
        return this._keys
      case 'CNPJ':
        // this._CNPJ = true
        // this._CPF = false
        // this._EMAIL = false
        // this._CELULAR = false

        this._keys[1].selected = true
        this._keys[0].selected = false
        this._keys[2].selected = false
        this._keys[3].selected = false

        console.log(this._keys)
        return this._keys
      case 'CELULAR':

        // this._CELULAR = true
        // this._CNPJ = false
        // this._CPF = false
        // this._EMAIL = false
        // console.log(this._keys)

        this._keys[2].selected = true
        this._keys[0].selected = false
        this._keys[1].selected = false
        this._keys[3].selected = false


        return this._keys
      case 'E-MAIL':
        // this._EMAIL = true
        // this._CELULAR = false
        // this._CNPJ = false
        // this._CPF = false

        this._keys[3].selected = true
        this._keys[0].selected = false
        this._keys[1].selected = false
        this._keys[2].selected = false

        return this._keys




    }


    // this._CPF = false
    // this._CNPJ = false
    // this._CELULAR = false
    // this._EMAIL = false

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
      cards: this._Fb.array([]),
      description: ['', []],
    });
  }

  card(): FormGroup {
    return this._Card = this._Fb.group({
      institution: ['', []],
      holder: ['', []],
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
