import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/models/book';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private _http: HttpClient,
  ) { }

  public findAll() {
    return this._http.get<Book[]>('http://localhost:3000/books');
  }

  public getById(id: string) {
    return this._http.get<Book>('http://localhost:3000/books/' + id);
  }


}
