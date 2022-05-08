import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BackEndUrl } from "src/app/company/shared/services/contracts/back-end-url";
import { AlertsToastr } from "src/app/company/shared/services/operations/alerts-toastr";
import { BackEnd } from "src/app/company/shared/services/operations/back-end";
import { ValidatorsGlobal } from "src/app/company/shared/services/operations/validators-global";
import { AddressService } from "src/app/company/shared/shareds-components/address/services/address.service";
import { ContactService } from "src/app/company/shared/shareds-components/contact/services/contact.service";
import { ClientDto } from "../dto/client-dto";


@Injectable()

export class ClientCreateServices extends BackEnd<ClientDto, number> {

  private formMain: FormGroup;

  constructor(
    override _HTTP: HttpClient,
    private _Validator: ValidatorsGlobal,
    private _AddressService: AddressService,
    private _ContactService: ContactService,
    private _Navigation: Router,
    private _Fb: FormBuilder,
    private _Toastr: AlertsToastr,
  ) {
    super(_HTTP, BackEndUrl._CLIENT_URL)
  }

  get formGet() {
    return this.formMain;
  }

  builderForm() {
    this.formLoad();
  }

  save() {

    this.formMain.value.cnpj = <number>this.formMain.value.cnpj;

    // console.log(this.formMain.value.cnpj);
    let cli: ClientDto = { ...this.formMain.value }

    if (!cli.ie || !cli.im) {
      cli.ie = 0;
      cli.im = 0;
    }
    this.addAsync$<ClientDto>(cli).subscribe({
      next: () => {

        // this._Validator.cleanAfters(['contact', 'address'], this.formGet);

        this._Toastr.Notice(`Produto,  ${cli.name}`, 0, 'success');
        this._Navigation.navigateByUrl('/clients');
      }, error: (err) => {
        console.log(err)
      }, complete: () => {
        console.log('completo')
      }
    })

  }

  private formLoad(): FormGroup {
    return this.formMain = this._Fb.group({
      name: ['', [Validators.required, Validators.maxLength(150)]],
      segment: ['', [Validators.maxLength(50)]],
      ie: ['', [Validators.minLength(9), Validators.maxLength(9)]],
      im: ['', [Validators.minLength(11), Validators.maxLength(11)]],
      cnpj: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      address: this._AddressService.formLoad(),
      contact: this._ContactService.formLoad(),
    })
  }





}
