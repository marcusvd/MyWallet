import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ValidatorsGlobal } from 'src/app/company/modules/shared/helpers/services/operations/validators-global';

import { InOutCreateService } from './services/in-out-create.service';


@Component({
  selector: 'in-out-create',
  templateUrl: './in-out-create.component.html',
  styleUrls: ['./in-out-create.component.css']
})
export class InOutCreateComponent implements OnInit {


  public tp: string;
  header: boolean = false;

  private _formContact: FormGroup
  constructor(
    private _Validator: ValidatorsGlobal,
    private _AccountService: InOutCreateService

  ) { }

  get ifPixType(): string {

    return this.tp;
  }

  get form(): FormGroup {
    return this._AccountService.formGet
  }
  check() {
    this.header = !this.header;
    // console.log(envent.value)
    // if (envent.value === 'on') {
    //   this.header = true;

    // }
    // if (envent.value === '') {


    // }
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
    return this._AccountService.staticControls
  }

  ngOnInit(): void {

    this._AccountService.formMain();

  }

}
