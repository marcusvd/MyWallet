import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth/auth.service';
import { FireBaseDbService } from '../../services/operations/fire-base-db.service';
import * as authentication from 'firebase/auth'
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit {

  constructor(
    public _FbDataBase: FireBaseDbService,
    public _Auth: AuthService
    ) { }

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }



logOut(){
  this._Auth.logOut();
}


isLogged(){

  if (this._Auth.currentUserValue?.displayName)
  {
    return ` ${this._Auth.currentUserValue.displayName} `
  }
  return ' Login ';

}







// nameToShowNav() {

//   authentication?.onAuthStateChanged(getAuth(), (user) => {
//     if (user != null && undefined && NaN) {
//       console.log(user);
//       return ' '+`${user?.displayName}`+ ' ';
//     }
//     return ' Login ';
//   }

//   )};





  ngOnInit(): void {
  }

}
