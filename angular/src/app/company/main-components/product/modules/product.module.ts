import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxModule } from "src/app/company/shared/modules/ngx.module";
import { SharedModule } from "src/app/company/shared/modules/shared.module";

// import { ProductListService } from '../services/product-list.service';
// import { ProductPagelistComponent } from 'src/app/company/product/product-pagelist/product-pagelist.component';
// import { ProductEditComponent } from '../product-edit/product-edit.component';
// import { ProductInfoComponent } from '../product-info/product-info.component';
// import { DateTimeFormatPipe } from '../../shared/helpers/pipes/date-time-format.pipe';

// import { ProductInfoService } from '../services/product-info.service';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductCreateService } from '../services/product-create.service';
import { ProductNavComponent } from '../product-nav/product-nav.component';
import { ProductListService } from '../services/product-list.service';

@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductNavComponent
   // ProductEditComponent,
    // ProductPagelistComponent,
    // ProductInfoComponent,
    // DateTimeFormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxModule,
    RouterModule,
  ],
  exports: [

  ],
  providers: [ProductCreateService, ProductListService]
})
export class ProductModule { }
