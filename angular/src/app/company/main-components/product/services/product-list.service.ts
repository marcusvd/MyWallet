

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
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class ProductListService extends BackEnd<ProductDto, number> {
  private _showHide: boolean = false;
  private _products: ProductDto[] = [];

  constructor(
    protected Http: HttpClient,
    private _Fb: FormBuilder,
    private _Validator: ValidatorsGlobal,
    private _Toastr: AlertsToastr,
    private _Navigation: Router
  ) {
    super(Http, BackEndUrl._PRODUCT_URL);
  }


  get products() {
    return this._products;
  }

  showHide(): boolean {
   return this._showHide = !this._showHide
  }

  loadProducts(): Observable<ProductDto[]> {
    return this.getAllAsync$<ProductDto>();
  }
}
