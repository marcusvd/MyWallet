import { Component, OnInit } from '@angular/core';

import * as authentication from 'firebase/auth'
import { getAuth } from "firebase/auth";
import { AuthService } from 'src/app/company/modules/core/components/authentication/auth/auth.service';
import { FireBaseDbService } from 'src/app/company/modules/core/services/back-end/fire-base-db.service';

@Component({
  selector: 'nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.css']
})
export class NavBarMainComponent implements OnInit {
  display: string;
  constructor(
    public _FbDataBase: FireBaseDbService,
    public _Auth: AuthService,
  ) { }

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  logOut() {
    return this._Auth.logOut();
  }



  ngOnInit(): void {
    this._Auth.loggedInUser = JSON.parse(localStorage.getItem('usr'));
    this.display = getAuth()?.currentUser?.displayName;

   authentication.getAuth().onAuthStateChanged(user =>{
      this._Auth.loggedInUser = user;
    //  console.log(user)
    });


    // authentication.onAuthStateChanged(function(item) {
    //   item.
    // })

  }

}
