import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductNavService } from './company/main-components/product/services/product-nav.service';
import { FireBaseDbService } from './company/shared/services/operations/fire-base-db.service';
//Auth and database
import * as authentication from 'firebase/auth'
import { getAuth } from 'firebase/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'angular';

  constructor(
    private _router: Router,
    public _ProductNavService: ProductNavService,
    public _FbDataBase: FireBaseDbService
  ) { }


  // collapsed = true;
  // toggleCollapsed(): void {
  //   this.collapsed = !this.collapsed;
  // }


  ngOnInit(): void {
  this._FbDataBase.dbLoad();

  authentication?.onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      return user?.displayName;
    }
    return null;
  })

  }

}
