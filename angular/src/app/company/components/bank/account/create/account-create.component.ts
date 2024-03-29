import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FireBaseDbService } from 'src/app/company/modules/core/services/back-end/fire-base-db.service';
import { ValidatorsGlobal } from 'src/app/company/modules/shared/helpers/services/operations/validators-global';

;
import { AccountCreateService } from '../services/account-create.service';


@Component({
  selector: 'account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css'],


})
export class AccountCreateComponent implements OnInit {


  public tp: string;

  // public _contact: ContactDto = new ContactDto();
  // public _valueSocialNetName: string = '';
  // public _valueSocialNetUrl: string = '';
  // private _socialNets: SocialNetworkDto[] = [];
  private _formContact: FormGroup
  constructor(
    private _Validator: ValidatorsGlobal,
    private _AccountService: AccountCreateService,
    private _FireBaseDbService: FireBaseDbService,

  ) { }


  get pixType(): any[] {
    return this._AccountService.pixType
  }

  get ifPixType(): string {

    return this.tp;
  }
  get typeKeyChange(): any[] {

    this._AccountService.pixTypeSingle.forEach((item) => {
      if (item.selected) {
        console.log(item)
      }
    })

    return this._AccountService.pixTypeSingle


  }
  typeKChange($event) {
    this.tp = $event.target.value

    this._AccountService.tPix($event.target.value)

  }
  get form(): FormGroup {
    return this._AccountService.formGet
  }
  requiredArray(formArray: FormArray, ctrl: string, ctrlToShow: string, lengthMin?: number, lengthMax?: number) {
    return this._Validator.requiredArray(formArray,
      ctrl,
      ctrlToShow,
      lengthMin,
      lengthMax
    )
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
  public touchedErrorsArray(formArray: FormArray, ctrl: string) {
    return this._Validator.touchedErrorsArray(formArray, ctrl);
  }

  addControls() {
    this._AccountService.addControls()
  }
  removeControls(i) {
    this._AccountService.removeControls(i);
  }
  get controls(): FormArray {
    return this._AccountService.cardsControls
  }
  async save(base: string, form: any) {


    this._AccountService.save(base, form);
  }

  ngOnInit(): void {
    this._AccountService.formLoad()
  }

}
