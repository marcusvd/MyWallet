

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BackEndUrl } from "src/app/company/shared/services/contracts/back-end-url";
import { AlertsToastr } from "src/app/company/shared/services/operations/alerts-toastr";
// import { CategoryDto } from "src/app/company/category/dto/category-dto";
// import { UnitOfMeasureDto } from "../../measure/dto/unit-of-measure";
// import { CrudService } from "../../shared/services/crud.service";
// import { AlertsToastr } from "../../shared/services/alerts-toastr";
// import { ValidatorsService } from "../../shared/services/validators.service";
import { ClientDto } from "../dto/client-dto";
// import { SubCategoryDto } from "src/app/company/category/dto/sub-category-dto";
import { BsModalRef } from "ngx-bootstrap/modal";
import { ValidatorsGlobal } from "src/app/company/shared/services/operations/validators-global";
import { BackEnd } from "src/app/company/shared/services/operations/back-end";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class ClientListService extends BackEnd<ClientDto, number> {
  private _showHide: boolean = false;
  private _clients: ClientDto[] = [];

  constructor(
    protected Http: HttpClient,
    private _Fb: FormBuilder,
    private _Validator: ValidatorsGlobal,
    private _Toastr: AlertsToastr,
    private _Navigation: Router
  ) {
    super(Http, BackEndUrl._CLIENT_URL);
  }


  get products() {
    return this._clients;
  }

  showHide(): boolean {
   return this._showHide = !this._showHide
  }


  // bsModalRef?: BsModalRef;

  //#region Create Insert
  // public categories: CategoryDto[] = [];
  // public uOfMeasures: UnitOfMeasureDto[] = [];
  // public uom: UnitOfMeasureDto;
  // public cat: CategoryDto;
  // public subCat: SubCategoryDto[] = [];
  // public formProductInsert: FormGroup;
  // selectedCat: number;
  // measureArray: string[];
  // storageArray: string[];
  // formatArray: string[];
  // stateArray: string[];
  // height: string;
  // width: string;
  // depth: string;

  // OnChangeHeigth($event: any) {
  //   this.height = $event.target.value;
  // }
  // OnChangeWidth($event: any) {
  //   this.width = $event.target.value;
  // }
  // OnChangeDepth($event: any) {
  //   this.depth = $event.target.value;
  // }

  // save() {


  //   const toSave: ClientDto = { ...this.formProductInsert.value }
  //   console.log(toSave);
  //   this.addAsync$(toSave).subscribe({
  //     next: ((prod: ClientDto) => {
  //       console.log(prod);
  // this._Validator.cleanAfters(['contact', 'address'], this.formProductInsert);
  //   this.formProductInsert.value.subCategories = [];
  //   this._Toastr.Notice(`Produto,  ${toSave.name}`, 0, 'success');
  //   this._Navigation.navigateByUrl('prodpagelist');
  // }),
  // error: (error) => {
  //   alert('deu ruim')
  // this._ValidatorsSrv.cleanAfters(['contact', 'address'], this.formProductInsert);
  //     },
  //   });

  // }
  // }
  // loadCats(): Observable<CategoryDto[]> {
  //   return this.Http.get<CategoryDto[]>(Url._CATEGORIES).pipe(take(1));
  // }
  loadClients(): Observable<ClientDto[]> {
    return this.getAllAsync$<ClientDto>();
  }
}
