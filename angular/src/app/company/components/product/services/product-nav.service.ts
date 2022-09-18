

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


import { ProductDto } from "../dto/product-dto";
// import { SubCategoryDto } from "src/app/company/category/dto/sub-category-dto";
import { AlertsToastr } from "src/app/company/modules/shared/helpers/services/operations/alerts-toastr";
import { ValidatorsGlobal } from "src/app/company/modules/shared/helpers/services/operations/validators-global";
import { BackEnd } from "src/app/company/modules/core/services/back-end/back-end";
import { BackEndUrl } from "src/app/company/modules/shared/helpers/services/contracts/back-end-url";

@Injectable({ providedIn: 'root' })
export class ProductNavService extends BackEnd<ProductDto, number> {

  public showHideBool: boolean = true;
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

  // showHide(): boolean {
  //  return this._showHide = !this._showHide
  // }


}
