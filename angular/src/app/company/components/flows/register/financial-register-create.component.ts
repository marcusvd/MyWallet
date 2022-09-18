import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { ValidatorsGlobal } from 'src/app/company/modules/shared/helpers/services/operations/validators-global';
import { InOutCreateService } from '../in-out/services/in-out-create.service';


@Component({
  selector: 'register-create',
  templateUrl: './financial-register-create.component.html',
  styleUrls: ['./financial-register-create.component.css']
})
export class FinancialRegisterCreateComponent implements OnInit {


  public tp: string;
  header: boolean = false;
  begin: boolean = true;
  //inFlow: 0
  //outFlow:1

  operations: boolean[] = [false, false, false];

  private _formContact: FormGroup
  constructor(
    private _Validator: ValidatorsGlobal,
    private _AccountService: InOutCreateService

  ) { }



  get form(): FormGroup {
    return this._AccountService.formGet
  }
  radioOperation($event: any) {

    switch ($event.target.value) {
      case 'INFLOW':
        this.operations[0] = true;
        this.operations[1] = false;
        this.operations[2] = false;
        this.OpChoose();

        break;
        case 'OUTFLOW':
          this.operations[0] = false;
          this.operations[1] = true;
          this.operations[2] = false;
          this.OpChoose();

        break
      case 'TRANSFER':
        this.operations[0] = false;
        this.operations[1] = false;
        this.operations[2] = true;
        this.OpChoose();
        break

    }

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


  OpChoose() {
    this.operations.forEach((o: boolean) => {
      if (o) {
        this.begin = false;
      }
    })

  }


  ngOnInit(): void {

    this._AccountService.formMain();
    this.OpChoose();




  }

}
