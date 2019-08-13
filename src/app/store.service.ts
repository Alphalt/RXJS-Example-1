import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, from } from "rxjs";
import { Libro } from "./models/libro.model";
import { tap, map } from "rxjs/operators";
import { createHttpObservable } from "./util";


@Injectable({
    providedIn: 'root'
})
export class Store {
    private subject = new BehaviorSubject<Libro[]>([]);

    libros$: Observable<Libro[]> = this.subject.asObservable();

    init() {
        const http$: Observable<Libro[]> = createHttpObservable('http://localhost:3000/api/Libros');

        http$
            .pipe(
                tap(() => console.log("Http request executed!")),
                map(res => Object.values(res))
            ).subscribe(
                libros => this.subject.next(libros)
            );
    }

    selectListOne() {
        return this.libros$
            .pipe(
                map(books => books
                    .filter(book => book.nombre == "string"))
            );
    }

    selectListTwo() {
        return this.libros$
            .pipe(
                map(books => books
                    .filter(book => book.nombre != "string"))
            );
    }

    selectBookById(bookId: string) {
        return this.libros$
            .pipe(
                map(books => books.find(book => book.id === bookId))
            );
    }

    saveBook(idBook: string, changes): Observable<any> {
        const books = this.subject.getValue();

        const bookIndex = books.findIndex(book => book.id === idBook);

        const newBooks = books.slice(0);

        newBooks[bookIndex] = {
            ...books[bookIndex],
            ...changes
        };

        return from(fetch('', {
            method: 'PUT',
            body: JSON.stringify(changes),
            headers: {
                'content-type': 'application/json'
            }
        }));
    }
}