import { Component, OnInit, NgZone } from '@angular/core';
import { Libro } from '../models/libro.model';
import { createHttpObservable } from '../util';
import { map, tap, shareReplay } from 'rxjs/operators';
import { noop, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '../store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lista1$: Observable<Libro[]>;
  lista2$: Observable<Libro[]>;
  bookIdInput: string = "";
  show: boolean = false;

  constructor(private store: Store) { }

  ngOnInit() {

    const books$ = this.store.libros$;

    this.lista1$ = this.store.selectListOne();

    this.lista2$ = this.store.selectListTwo();
  }

  toBooksComponent(id) {
    this.bookIdInput = id;
    this.show = true;
  }

}
