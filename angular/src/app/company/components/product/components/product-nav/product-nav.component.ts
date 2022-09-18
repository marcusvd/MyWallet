import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ProductDto } from '../../dto/product-dto';
import { ProductCreateService } from '../../services/product-create.service';
import { ProductListService } from '../../services/product-list.service';
import { ProductNavService } from '../../services/product-nav.service';

@Component({
  selector: 'product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.css']
})
export class ProductNavComponent implements OnInit {
  public products: ProductDto[] = [];
  public showHideBool: boolean = true;



  constructor(
    private _ProductService: ProductListService,
    // public _ProductNavService: ProductNavService,
    private _LocaleService: BsLocaleService,
  ) { }




  registerProduct() {
  this.showHideBool = false;


  //return this._ProductService.showHide();
  }






  ngOnInit(): void {

    this._ProductService.loadProducts().subscribe({
      next: (p: ProductDto[]) => {
        this.products = [...p as ProductDto[]];

      }, error: (err) => {

      }, complete: () => { }
    })
  }

}
