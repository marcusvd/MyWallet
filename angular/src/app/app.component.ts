import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductNavService } from './company/main-components/product/services/product-nav.service';

import * as firebase from 'firebase/app';

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
  ) { }


  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }


  fireBaseConfig() {
    const firebaseConfig = {
      apiKey: "AIzaSyCrXv3qP5nhnVomv5TwjWXUuiF0XOcEokE",
      authDomain: "mybrwallet.firebaseapp.com",
      projectId: "mybrwallet",
      storageBucket: "mybrwallet.appspot.com",
      messagingSenderId: "388230143313",
      appId: "1:388230143313:web:aadf3da852462fb5c18770",
      measurementId: "G-7YE35WZY7C"
    };
    return firebaseConfig
  }
  ngOnInit(): void {
    // Initialize Firebase
    firebase.initializeApp(this.fireBaseConfig())
  }

}
