import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductNavService } from './company/main-components/product/services/product-nav.service';
import { FireBaseDbService } from './company/shared/services/operations/fire-base-db.service';
//Auth and database
import * as authentication from 'firebase/auth'
import { getAuth } from 'firebase/auth';
import { AuthService } from './company/shared/authentication/auth/auth.service';



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
    public _Auth: AuthService
  ) { }


  setCurrentUser(): void {
    let user: authentication.User;

    if (localStorage.getItem('user'))
      user = JSON.parse(localStorage.getItem('usr') ?? '{}');
    else
      user = null

  //  if (user)
   //   this._Auth.setUserData(user);
  }


  ngOnInit(): void {
    this._Auth.loggedInUser = JSON.parse(localStorage.getItem('usr'));
  //  this.setCurrentUser();

    this._FbDataBase.dbLoad();
  }

}
