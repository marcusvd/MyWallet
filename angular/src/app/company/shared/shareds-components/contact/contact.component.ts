import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ContactDto } from 'src/app/company/shared/shareds-components/contact/dto/contact-dto';
import { SocialNetworkDto } from 'src/app/company/shared/shareds-components/contact/dto/social-network-dto';
import { ValidatorsGlobal } from 'src/app/company/shared/services/operations/validators-global';
import { ContactService } from './services/contact.service';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // public _contact: ContactDto = new ContactDto();
  // public _valueSocialNetName: string = '';
  // public _valueSocialNetUrl: string = '';
  // private _socialNets: SocialNetworkDto[] = [];
  private _formContact: FormGroup
  constructor(
    private _Validator: ValidatorsGlobal,
    private _ContactService: ContactService

  ) { }


  get form(): FormGroup {
    return this._ContactService.formGet
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
    this._ContactService.addControls()
  }

  removeControls(i) {
    this._ContactService.removeControls(i);
  }


  get controls(): FormArray {
    return this._ContactService.snwControls
  }



  ngOnInit(): void {

  }

}
