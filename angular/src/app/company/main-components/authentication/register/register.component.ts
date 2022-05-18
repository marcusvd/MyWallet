import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorsGlobal } from 'src/app/company/shared/services/operations/validators-global';
import { RegisterDto } from './dto/register-dto';
import { RegisterService } from './services/register.service';


@Component({
  selector: 'register-comp',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _Register: RegisterService,
    private _Validator: ValidatorsGlobal,
  ) { }



  login() {
  }

  get form(): FormGroup {
    return this._Register.getForm;
  }

save(){
  this._Register.save();
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
    this._Register.formLoad();
  }

}
