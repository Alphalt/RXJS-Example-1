import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Libro } from '../models/libro.model';
import { ActivatedRoute } from '@angular/router';
import { createHttpObservable } from '../util';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements AfterViewInit, OnChanges {

  book$: Observable<Libro>;
  books$: Observable<Libro[]>;
  @Input() bookId: string = "";

  @ViewChild('searhInput') searhInput: ElementRef;

  constructor() { }

  ngOnChanges(){
    this.book$ = createHttpObservable(`http://localhost:3000/api/Libros/${this.bookId}`);
    this.books$ = this.loadBooks();
  }

  ngAfterViewInit() {
    fromEvent<any>(this.searhInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(console.log);
  }

  loadBooks(){
    return createHttpObservable(`http://localhost:3000/api/Libros`);
  }

}
