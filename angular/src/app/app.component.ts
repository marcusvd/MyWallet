import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductNavService } from './company/main-components/product/services/product-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(
    private _router: Router,
    public _ProductNavService: ProductNavService,
  ) { }


  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }


}
