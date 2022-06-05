import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth/auth.service';
import { FireBaseDbService } from '../../services/operations/fire-base-db.service';
import * as authentication from 'firebase/auth'
import { getAuth, signOut, User, UserCredential } from "firebase/auth";
import * as firebase from 'firebase/compat';

@Component({
  selector: 'nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit {
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
