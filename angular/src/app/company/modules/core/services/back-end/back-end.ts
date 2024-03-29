import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { IBackEnd } from "./iback-end";


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
