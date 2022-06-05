import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/company/shared/authentication/auth/auth.service';
import { FireBaseDbService } from 'src/app/company/shared/services/operations/fire-base-db.service';
import * as authentication from 'firebase/auth'
import { getAuth, signOut, User, UserCredential } from "firebase/auth";
import * as firebase from 'firebase/compat';

@Component({
  selector: 'nav-bank',
  templateUrl: './nav-bank.component.html',
  styleUrls: ['./nav-bank.component.css']
})
export class NavBankComponent implements OnInit {
  display: string;
  constructor(
    public _FbDataBase: FireBaseDbService,
    public _Auth: AuthService,
  ) { }





  ngOnInit(): void {



  }

}
