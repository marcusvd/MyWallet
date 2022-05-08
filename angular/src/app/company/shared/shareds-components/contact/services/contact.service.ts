import { Injectable } from "@angular/core";
import { Form, FormArray, FormControl } from "@angular/forms";
import { FormArrayName, FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { SocialNetworkDto } from "src/app/company/shared/shareds-components/contact/dto/social-network-dto";


@Injectable({
  providedIn: 'root'
})

export class ContactService {


  private _socialNetworks: SocialNetworkDto[] = [];
  private _formsocialNetwork: FormGroup;
  private _formContact: FormGroup;


  constructor(
    private _Fb: FormBuilder,
  ) { }



  get formGet(): FormGroup {
    return this._formContact;
  }

  get socialNetwork(): SocialNetworkDto[] {
    return this._socialNetworks
  }



  formLoad(): FormGroup {
    return this._formContact = this._Fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
      cel: ['', [Validators.minLength(8), Validators.maxLength(20)]],
      zap: ['', [Validators.minLength(8), Validators.maxLength(150)]],
      site: ['', [Validators.maxLength(50)]],
      landline: ['', [Validators.minLength(8), Validators.maxLength(150)]],
      socialnetworks: this._Fb.array([this.socialnetWorks()]),
    });
  }
    socialnetWorks(): FormGroup {
      return this._formsocialNetwork = this._Fb.group({
        name: ['', [Validators.maxLength(150)]],
        url: ['', [Validators.maxLength(150)]]
      })

    }


  get snwControls() {
    return this._formContact.controls['socialnetworks'] as FormArray;
  }

  addControls() {
    this.snwControls.push(this.socialnetWorks());
  }
  removeControls(i: number) {
    this.snwControls.removeAt(i);
  }






}
