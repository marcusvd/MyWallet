import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProductCreateComponent } from '../components/product-create/product-create.component';
import { ProductCreateService } from '../services/product-create.service';
import { ProductNavComponent } from '../components/product-nav/product-nav.component';
import { ProductListService } from '../services/product-list.service';

import { NgxModule } from 'src/app/company/modules/shared/modules/ngx.module';
import { SharedModule } from 'src/app/company/modules/shared/modules/shared.module';

@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductNavComponent
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
  providers: [
    ProductCreateService,
    ProductListService
  ]
})
export class ProductModule { }
