import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorsGlobal } from 'src/app/company/shared/services/operations/validators-global';
import { ClientDto } from '../dto/client-dto';
import { ClientCreateServices } from '../services/client-create.service';

@Component({
  selector: 'client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  constructor(
    private _CliCreateServices: ClientCreateServices,
    private _Validator: ValidatorsGlobal,
    ) { }



  save() {
    this._CliCreateServices.save();
  }

  get form(): FormGroup {
    return this._CliCreateServices.formGet;
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


  ngOnInit(): void {

    this._CliCreateServices.builderForm();
  }

}
