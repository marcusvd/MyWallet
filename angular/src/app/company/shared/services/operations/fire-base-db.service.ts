import { Injectable, ModuleWithProviders } from '@angular/core';

import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";


//fire
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//
// imports: [
//   AngularFireModule.initializeApp(fireBaseConfig()),
//   AngularFireAuthModule,
//   AngularFirestoreModule,
//   AngularFireStorageModule,
//   AngularFireDatabaseModule,
// ]



@Injectable({
  providedIn: 'root'
})

export class FireBaseDbService {




constructor() { }


 dbLoad(): Firestore{
//returnType:ModuleWithProviders<AngularFireModule>
//  const db =  AngularFireModule.initializeApp(this.fireBaseConfig());
//  return db


   const app = initializeApp(this.fireBaseConfig())
   const db = getFirestore(app);
   return db;

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
