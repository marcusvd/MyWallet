import { Injectable } from "@angular/core";
import { FormArray } from "@angular/forms";
import { FormBuilder, FormGroup } from "@angular/forms";




@Injectable({
  providedIn: 'root'
})

export class RegisterCreateService {

  private _formMain: FormGroup;



  constructor(
    private _Fb: FormBuilder,
  ) { }



  get formGet(): FormGroup {
    return this._formMain;
  }



   formMain(): FormGroup {
    return this._formMain = this._Fb.group({
      statics: this._Fb.array([this.formLoad()])
    })
  }

  _formStatic: FormGroup;

  formLoad(): FormGroup {
    return this._formStatic = this._Fb.group({
      name: ['', []],
      description: ['', []],
      static: ['', []],
      variable: ['', []],
      inflow:[],

    });
  }


  get staticControls() {
    return this._formMain.get('statics') as FormArray;
  }

  addControls() {
    this.staticControls.push(this.formLoad());
  }
  removeControls(i: number) {
    this.staticControls.removeAt(i);
  }






}
