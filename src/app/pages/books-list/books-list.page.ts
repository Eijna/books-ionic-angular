import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/services/book.service';
import { Observable, Subscribable } from 'rxjs';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.page.html',
  styleUrls: ['./books-list.page.scss'],
})
export class BooksListPage implements OnInit {

  books: Book[] = [];

  constructor(
    private _bookService: BookService
  ) { }

  ngOnInit(): void {
    this._bookService
      .findAll()
      .subscribe(books => {
        this.books = books;

        this._bookService
          .getById(books[1]._id as string)
          .subscribe(console.log);
      }
      );
  }

}
