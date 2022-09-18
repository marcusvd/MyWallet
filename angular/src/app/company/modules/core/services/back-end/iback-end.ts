import { Observable } from "rxjs";

export interface IBackEnd<T, ID> {

  addAsync$<T>(record: T): Observable<T>;
  updateAsync$<T>(record: T): Observable<T>;
  deleteAsync$<T>(id: number): Observable<T>;
  getAllAsync$<T>(): Observable<T[]>;
  getByIdAsync$<T>(id: number): Observable<T>;

}
