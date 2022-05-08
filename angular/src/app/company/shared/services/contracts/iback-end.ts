import { Injectable } from "@angular/core";
import { Form, FormArray, FormControl } from "@angular/forms";
import { FormArrayName, FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { SocialNetworkDto } from "src/app/company/shared/shareds-components/contact/dto/social-network-dto";




export interface IBackEnd<T, ID> {

  addAsync$<T>(record: T): Observable<T>;
  updateAsync$<T>(record: T): Observable<T>;
  deleteAsync$<T>(id: number): Observable<T>;
  getAllAsync$<T>(): Observable<T[]>;
  getByIdAsync$<T>(id: number): Observable<T>;



}
