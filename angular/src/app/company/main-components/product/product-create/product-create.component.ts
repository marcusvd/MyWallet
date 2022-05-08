import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ValidatorsGlobal } from 'src/app/company/shared/services/operations/validators-global';
import { ProductCreateService } from '../services/product-create.service';
// import { CategoryDto } from '../../category/dto/category-dto';
// import { SubCategoryDto } from '../../category/dto/sub-category-dto';
// import { MeasureDto } from '../../measure/dto/measure-dto';


defineLocale('pt-br', ptBrLocale)


@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers: []
})
export class ProductCreateComponent implements OnInit {
  myRegion: string = 'pt-br';
  constructor(
    private _ProductService: ProductCreateService,
    private _LocaleService: BsLocaleService,
    private _ValidatorsSrv: ValidatorsGlobal,
  ) {
    this._LocaleService.use(this.myRegion);
  }

  OnChangeHeigth($event: any) {
    this._ProductService.height = $event.target.value;
  }
  OnChangeWidth($event: any) {
    this._ProductService.width = $event.target.value;
  }
  OnChangeDepth($event: any) {
    this._ProductService.depth = $event.target.value;
  }
  // onChangeCategory($event): void {
  //   this._ProductService.OnChangeCategory($event)
  // }
    get formProductInsert(): FormGroup {
    return this._ProductService.formProductInsert
  }

  required(form: FormGroup, ctrl: string, ctrlToShow: string, lengthMin?: number, lengthMax?: number) {
    return this._ValidatorsSrv.required(form,
      ctrl,
      ctrlToShow,
      lengthMin,
      lengthMax
    )
  }
  touchedErrors(ctrl: string, formGroup: FormGroup) {
    return this._ValidatorsSrv.touchedErrors(ctrl,
      formGroup,
    )
  }

  save(): void {
    this._ProductService.save();
  }

  ngOnInit(): void {
    this._ProductService.formInsert();
    this._ProductService.loadSelects();
    // this._ProductService.loadCategories();
    // this._ProductService.addSelectCat();
    // this._ProductService.addSelectMeasure();
  }

}












