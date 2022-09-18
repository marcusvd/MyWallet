

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ProductDto } from "../dto/product-dto";
import { BsModalRef } from "ngx-bootstrap/modal";
import { BackEnd } from "src/app/company/modules/core/services/back-end/back-end";
import { ValidatorsGlobal } from "src/app/company/modules/shared/helpers/services/operations/validators-global";
import { AlertsToastr } from "src/app/company/modules/shared/helpers/services/operations/alerts-toastr";
import { BackEndUrl } from "src/app/company/modules/shared/helpers/services/contracts/back-end-url";

@Injectable({ providedIn: 'root' })
export class ProductCreateService extends BackEnd<ProductDto, number> {

  constructor(
    protected Http: HttpClient,
    private _Fb: FormBuilder,
    private _Validator: ValidatorsGlobal,
    private _Toastr: AlertsToastr,
    private _Navigation: Router
  ) {
    super(Http, BackEndUrl._PRODUCT_URL);
  }

  bsModalRef?: BsModalRef;

  //#region Create Insert
  // public categories: CategoryDto[] = [];
  // public uOfMeasures: UnitOfMeasureDto[] = [];
  // public uom: UnitOfMeasureDto;
  // public cat: CategoryDto;
  // public subCat: SubCategoryDto[] = [];
  public formProductInsert: FormGroup;
  selectedCat: number;
  measureArray: string[];
  storageArray: string[];
  formatArray: string[];
  stateArray: string[];
  height: string;
  width: string;
  depth: string;

  OnChangeHeigth($event: any) {
    this.height = $event.target.value;
  }
  OnChangeWidth($event: any) {
    this.width = $event.target.value;
  }
  OnChangeDepth($event: any) {
    this.depth = $event.target.value;
  }

  loadSelects() {
    this.measureArray = [];
    this.measureArray.push('(MM) - Milímetro(s)', '(CM) - Centímetro(s)', '(M) - Metro(s)');

    this.storageArray = [];
    this.storageArray.push('Empilhado(s)', 'Lado a lado', 'Empilhado(s) e lado a lado', 'Selecione');

    this.formatArray = [];
    this.formatArray.push('Quadrada', 'Retangular', 'Cilindrica', 'Triangular', 'Linear', 'Hìbrido', 'Selecione');

    this.stateArray = [];
    this.stateArray.push('Sólido', 'Líquido', 'Gasoso', 'Selecione');
  }

  formInsert() {

    this.formProductInsert = this._Fb.group({
      name: ['', [Validators.required, Validators.maxLength(150), Validators.minLength(3)]],

      quantity: ['', [Validators.required]],
      date: ['', [Validators.required]],


      price: ['', [Validators.required]],
      cost: ['', [Validators.required]],


      description: ['', [Validators.maxLength(1000)]],
      barcode: ['', [Validators.maxLength(1000)]]
    })
  }
  save() {
    const toSave: ProductDto = { ...this.formProductInsert.value }
    console.log(toSave);
    this.addAsync$(toSave).subscribe({
      next: ((prod: ProductDto) => {
        console.log(prod);
       // this._Validator.cleanAfters(['contact', 'address'], this.formProductInsert);
        this.formProductInsert.value.subCategories = [];
        this._Toastr.Notice(`Produto,  ${toSave.name}`, 0, 'success');
        this._Navigation.navigateByUrl('/products').then((result)=> {
          window.location.reload();
        });
      }),
      error: (error) => {
        alert('deu ruim')
      },
    });

  }
}
