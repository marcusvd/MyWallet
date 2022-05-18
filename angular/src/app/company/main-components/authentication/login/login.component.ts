import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorsGlobal } from 'src/app/company/shared/services/operations/validators-global';
import { LoginDto } from './dto/login-dto';
import { LoginService } from './services/login.service';


@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _Login: LoginService,
    private _Validator: ValidatorsGlobal,
    ) { }



  login() {
  }

  get form(): FormGroup {
     return this._Login.getForm;
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

    this._Login.formLoad();
  }

}
