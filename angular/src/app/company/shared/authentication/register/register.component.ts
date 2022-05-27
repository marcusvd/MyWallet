import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorsGlobal } from 'src/app/company/shared/services/operations/validators-global';
import { AuthService } from '../auth/auth.service';
import { RegisterDto } from './dto/register-dto';
import { RegisterService } from './services/register.service';


@Component({
  selector: 'register-comp',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _Auth: AuthService,
    // private _Register: RegisterService,
    private _Validator: ValidatorsGlobal,
  ) { }


  get form(): FormGroup {
    return this._Auth.getFormRegister;
  }

registerUser(){
  this._Auth.registerUser();
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
        this._Auth.formLoadRegister();
  }

}
