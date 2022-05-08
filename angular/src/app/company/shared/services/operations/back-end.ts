import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Form, FormArray, FormControl } from "@angular/forms";
import { FormArrayName, FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { Observable, take } from "rxjs";
import { SocialNetworkDto } from "src/app/company/shared/shareds-components/contact/dto/social-network-dto";
import { IBackEnd } from "../contracts/iback-end";


Injectable({ providedIn: 'root' })

export class BackEnd<T, ID> implements IBackEnd<T, ID> {


  constructor(
    protected _HTTP: HttpClient,
    public _UrlBackEnd: string
  ) { this._UrlBackEnd.toLowerCase() }

  addAsync$<T>(record: T): Observable<T> {
    return this._HTTP.post<T>(this._UrlBackEnd, record).pipe(take(1))
  }
  updateAsync$<T>(record: T): Observable<T> {
    throw new Error("Method not implemented.");
  }
  deleteAsync$<T>(id: number): Observable<T> {
    throw new Error("Method not implemented.");
  }
  getAllAsync$<T>(): Observable<T[]> {
    return this._HTTP.get<T[]>(this._UrlBackEnd).pipe(take(1))
  }
  getByIdAsync$<T>(id: number): Observable<T> {
    throw new Error("Method not implemented.");
  }




}
