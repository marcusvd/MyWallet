import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Auth and database
import * as authentication from 'firebase/auth'
import { getAuth } from 'firebase/auth';
import { AuthService } from './company/modules/core/components/authentication/auth/auth.service';
import { FireBaseDbService } from './company/modules/core/services/back-end/fire-base-db.service';
//By me
import { ProductNavService } from './company/components/product/services/product-nav.service';

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
    public _FbDataBase: FireBaseDbService,
    public _auth: AuthService
  ) { }


  setCurrentUser(): void {
    let user: authentication.User;

    if (localStorage.getItem('user'))
      user = JSON.parse(localStorage.getItem('usr') ?? '{}');
    else
      user = null

  //  if (user)
   //   this._auth.setUserData(user);
  }


  ngOnInit(): void {
    this._auth.loggedInUser = JSON.parse(localStorage.getItem('usr'));
  this.setCurrentUser();

    this._FbDataBase.dbLoad();
  }

}
