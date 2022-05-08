import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Form, FormArray, FormControl } from "@angular/forms";
import { FormArrayName, FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { SocialNetworkDto } from "src/app/company/shared/shareds-components/contact/dto/social-network-dto";


@Injectable({
  providedIn: 'root'
})

export class AddressService {
  private _formAddress: FormGroup;

  constructor(
    private _Fb: FormBuilder,
    private _HTTP: HttpClient
  ) { }


  query($event) {
    var Url = (`//viacep.com.br/ws/${$event}/json`);
    //remove all characters that no be a number.
    let cep: string = $event;
    cep = cep.replace(/\D/g, '');
    //check if the field are empty
    if (cep != "") {
      //check if number is valid
      var validationCep = /^[0-9]{8}$/;
    }
    if (validationCep.test(cep)) {
      this._HTTP.get(Url).subscribe((cep: any) => this.seedForm(cep));
    }
  }
  seedForm(cep: any) {
    this._formAddress.controls['zipcode'].setValue(cep.cep);
    this._formAddress.controls['street'].setValue(cep.logradouro);
    this._formAddress.controls['number'].setValue(cep.numero);
    this._formAddress.controls['district'].setValue(cep.bairro);
    this._formAddress.controls['city'].setValue(cep.localidade);
    this._formAddress.controls['state'].setValue(cep.uf);
    this._formAddress.controls['complement'].setValue(cep.complemento);
  }

  formLoad(): FormGroup {
    return this._formAddress = this._Fb.group({
      zipcode: ['', [Validators.maxLength(10)]],
      street: ['', [Validators.required,  Validators.maxLength(150)]],
      number: ['', [Validators.required,  Validators.maxLength(20)]],
      district: ['', [Validators.required,  Validators.maxLength(50)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      complement: ['', [Validators.maxLength(1000)]],
    });
  }


  get formAddress(): FormGroup {
    return this._formAddress;
  }

}
