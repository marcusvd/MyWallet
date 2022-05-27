import { Injectable } from '@angular/core';

import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})

export class FireBaseDbService {




constructor() { }


 dbLoad():Firestore{
   const app = initializeApp(this.fireBaseConfig())
   const db = getFirestore(app);
   return db;
// return firebase.initializeApp(this.fireBaseConfig())
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


}
