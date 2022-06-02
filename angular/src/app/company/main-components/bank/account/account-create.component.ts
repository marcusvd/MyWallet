import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ContactDto } from 'src/app/company/shared/shareds-components/contact/dto/contact-dto';
import { SocialNetworkDto } from 'src/app/company/shared/shareds-components/contact/dto/social-network-dto';
import { ValidatorsGlobal } from 'src/app/company/shared/services/operations/validators-global';
import { AccountCreateService } from './services/account-create.service';
import { ThisReceiver } from '@angular/compiler';
import { StringDecoder } from 'string_decoder';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FireBaseDbService } from 'src/app/company/shared/services/operations/fire-base-db.service';
import { environment } from 'src/environments/environment';


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
  // public commonValidations(ctrl: string, error: string, msg: string, formGroup: FormGroup) {
  //   return formGroup.get(ctrl).hasError(error)
  //     ? msg : formGroup.get(ctrl).hasError(error)
  //       ? msg : formGroup.get(ctrl).hasError(error) ? '' : '';
  // }
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
