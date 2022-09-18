import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter } from 'rxjs';

//import { UnitValidatorsService } from 'src/app/organization/services/admin/unit/unit-validators.service';
import { ValidatorsGlobal } from 'src/app/company/shared/services/operations/validators-global';
import { AddressService } from './services/address.service';
@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']

})
@Injectable({
  providedIn: 'root'
})

export class AddressComponent implements OnInit {

  //#region Properties and Fields
  private _cep: any;

  constructor(
    private _Fb: FormBuilder,
    private _ValGlobal: ValidatorsGlobal,
    private _AddressService: AddressService,
    private _Http: HttpClient
  ) { }
  //#region Methods

  get form(): FormGroup {
    return this._AddressService.formAddress;
  }

  required(form: FormGroup, ctrl: string, ctrlToShow: string, lengthMin?: number, lengthMax?: number) {
    return this._ValGlobal.required(form,
      ctrl,
      ctrlToShow,
      lengthMin,
      lengthMax
    )
  }
  touchedErrors(ctrl: string, formGroup: FormGroup) {
    return this._ValGlobal.touchedErrors(ctrl,
      formGroup,
    )
  }
  commonValidations(ctrl: string, msgMin: string, msgMax: string, form: FormGroup) {
    return this._ValGlobal.commonFields(ctrl, msgMin, msgMax, form)
  }

  query($event) {

    let filtered: string = $event.target.value;

    filtered = filtered.replace('.', '')
    filtered = filtered.replace('-', '')

    this._AddressService.query(filtered)
  }
  //#endregion
  ngOnInit(): void {

  }

}
