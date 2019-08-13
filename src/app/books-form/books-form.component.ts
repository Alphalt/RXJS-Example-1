import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter, concatMap, mergeMap, exhaustMap } from 'rxjs/operators';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit, AfterViewInit {

  @ViewChild('saveButton') saveButton: ElementRef;

  formularioLibro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.crearFormularioLibro();
  }

  ngOnInit() {
    this.formularioLibro.valueChanges
      .pipe(
        filter(() => this.formularioLibro.valid),
        concatMap(changes => this.saveBooks(changes))
      )
      .subscribe();
  }

  ngAfterViewInit() {
    fromEvent(this.saveButton.nativeElement, 'click')
      .pipe(
        exhaustMap(() => this.saveBooks(this.formularioLibro.value))
      ).subscribe();
  }

  saveBooks(changes) {
    return from(fetch(`http://localhost:3000/api/Libros`, {
      method: 'POST',
      body: JSON.stringify(changes),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      }
    }));
  }

  crearFormularioLibro() {
    this.formularioLibro = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.maxLength(50)],
      autor: ['', Validators.required],
      fechaPublicacion: ['', Validators.required]
    });
  }

}
