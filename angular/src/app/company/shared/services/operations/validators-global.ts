import { Injectable } from "@angular/core";
import { Form, FormArray, FormControl } from "@angular/forms";
import { FormArrayName, FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { SocialNetworkDto } from "src/app/company/shared/shareds-components/contact/dto/social-network-dto";


@Injectable({
  providedIn: 'root'
})

export class ValidatorsGlobal {
  constructor(
    private _Fb: FormBuilder,
  ) { }



  private _characters: string = ' caracteres.';
  //length of min or max
  private _length: number;
  private _quantity: number;
  private _controlName: string;
  private _minLen: string = 'Preenchimento, mínimo de pelo menos ';
  private _minLe: string = 'Preenchimento, mínimo de pelo menos ';
  private _maxLen: string = 'Preenchimento não pode ultrapassar ';
  private _req: string = ' é de preenchimento obrigatório.';





  public touchedErrors(ctrl: string, formGroup: FormGroup) {
    return formGroup.get(ctrl).errors
      && formGroup.get(ctrl).touched
      ? true : false;
  }
  commonFields(ctrl: string, msgMin: string, msgMax: string, form: FormGroup) {
    return form.get(ctrl).hasError('minlength')
      ? msgMin : form.get(ctrl).hasError('maxlength')
        ? msgMax : '';
  }
  required(form: FormGroup, ctrl: string, ctrlToShow: string, lengthMin?: number, lengthMax?: number) {
    return form.get(ctrl).hasError('minlength')
      ? `${this._minLen}${lengthMin}${this._characters}`
      : form.get(ctrl).hasError('min')
        ? `${this._minLe}${lengthMin}${this._characters}`
        : form.get(ctrl).hasError('maxlength')
          ? `${this._maxLen}${lengthMax}${this._characters}`
          : form.get(ctrl).hasError('required')
            ? `${ctrlToShow + ' '}${this._req}` :
            form.get(ctrl).hasError('empty')
              ? this._quantity : '';
  }

  mailField(ctrl: string, msgEmail: string, msgMax: string, msgReq: string, form: FormGroup) {
    return form.get(ctrl).hasError('email')
      ? msgEmail
      : form.get(ctrl).hasError('maxlength')
        ? msgMax
        : form.get(ctrl).hasError('required')
          ? msgReq : '';
  }
  requiredArray(formArray: FormArray, ctrl: string, ctrlToShow: string, lengthMin?: number, lengthMax?: number) {

    return formArray.get(ctrl).hasError('minlength')
      ? `${this._minLen}${lengthMin}${this._characters}`
      : formArray.get(ctrl).hasError('maxlength')
        ? `${this._maxLen}${lengthMax}${this._characters}`
        : formArray.get(ctrl).hasError('required')
          ? `${ctrlToShow + ' '}${this._req}` : '';
  }

  public touchedErrorsArray(formArray: FormArray, ctrl: string) {
    return formArray.get(ctrl).errors && formArray.get(ctrl).touched ? true : false;
  }


  //#endregion
  // cleanAfters(toClean: string[], form?: FormGroup) {
  //   if (toClean.length != -1) {
  //     toClean.forEach((item) => {
  //       if (item.toLocaleLowerCase() === 'contact') {
  //         if (this._FormContact != undefined) {
  //           this._FormContact.reset();
  //           (<HTMLInputElement>document.getElementById('socialnetName')).value = '';
  //           (<HTMLInputElement>document.getElementById('socialnetUrl')).value = '';
  //           this._socialNetworks = [];
  //         }
  //       }
  //       if (item.toLocaleLowerCase() === 'address') {
  //         if (this._FormAddress != undefined) {
  //           this._FormAddress.reset();
  //         }
  //       }
  //       if (form != undefined) {
  //         form.reset();
  //       }

  //     })
  //   }

  // }


}
