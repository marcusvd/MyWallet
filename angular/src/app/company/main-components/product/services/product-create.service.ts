

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
import { ProductDto } from "../dto/product-dto";
// import { SubCategoryDto } from "src/app/company/category/dto/sub-category-dto";
import { BsModalRef } from "ngx-bootstrap/modal";
import { ValidatorsGlobal } from "src/app/company/shared/services/operations/validators-global";
import { BackEnd } from "src/app/company/shared/services/operations/back-end";

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
  // loadCategories() {
  //   this.loadCats().subscribe((item: CategoryDto[]) => {
  //     this.categories = item
  //   })
  // }
  // OnChangeCategory($event: any) {
  //   let ghy = this.categories.forEach((catId) => {
  //     if (catId.id == $event.target.value) {
  //       this.subCat = catId.subCategories;
  //     }
  //   })
  // }
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
  // addSelectMeasure() {
  //   this.loadMeasures().subscribe({
  //     next: (item: UnitOfMeasureDto[]) => {
  //       this.uOfMeasures = item
  //       const unit: UnitOfMeasureDto = new UnitOfMeasureDto();
  //       unit.name = 'Selecione';
  //       unit.description = 'Selecione';
  //       this.uOfMeasures.push(unit);
  //     }, error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }
  // addSelectCat() {
  //   this.loadCats().subscribe({
  //     next: (item: CategoryDto[]) => {
  //       this.categories = item
  //       const cat: CategoryDto = new CategoryDto();
  //       cat.name = 'Selecione';
  //       this.categories.push(cat);
  //     }, error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }
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
        // this._ValidatorsSrv.cleanAfters(['contact', 'address'], this.formProductInsert);
      },
    });

  }
  // }
  // loadCats(): Observable<CategoryDto[]> {
  //   return this.Http.get<CategoryDto[]>(Url._CATEGORIES).pipe(take(1));
  // }
  // loadMeasures() {
  //   return this.Http.get<UnitOfMeasureDto[]>(Url._UNITOFMEASURES).pipe(take(1));
  // }
}
