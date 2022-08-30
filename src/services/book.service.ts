import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private _http: HttpClient,
  ) { }

  public findAll() {
    this._http
      .get<Book[]>('http://localhost:3000/books')
      .subscribe(books => {
        console.log(books);
      });
  }

  public getById(id: string) {
    this._http
      .get<Book>('http://localhost:3000/books/' + id)
      .subscribe(books => {
        console.log(books);
      });
  }


}
