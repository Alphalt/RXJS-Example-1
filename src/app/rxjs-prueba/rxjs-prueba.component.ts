import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs-prueba',
  templateUrl: './rxjs-prueba.component.html',
  styleUrls: ['./rxjs-prueba.component.css']
})
export class RxjsPruebaComponent implements OnInit {

  interval$: Observable<any>;

  constructor() { }

  ngOnInit() {
    let observableOf$ = of('hola', 'mundo');

    observableOf$.subscribe(
      next => console.log("next: ", next),
      error => console.log("error", error),
      () => console.log("complete")
    );

    let observableFrom$ = from([1, 2, 3]);

    observableFrom$.subscribe(
      next => console.log("next", next),
      error => console.log("error", error),
      () => console.log("complete")
    );

    let observableFromEvent$ = fromEvent(document.querySelector("button"), "click");

    observableFromEvent$.subscribe(
      next => console.log("next", next),
      error => console.log("error", error),
      () => console.log("complete")
    );

    let miPrimeraPromise = new Promise((resolve, reject) => {
      // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
      // En este ejemplo, usamos setTimeout(...) para simular código asíncrono. 
      // En la vida real, probablemente uses algo como XHR o una API HTML5.
      setTimeout(function(){
        resolve("¡Éxito!"); // ¡Todo salió bien!
      }, 250);
    });

    miPrimeraPromise.then((respuesta)=> {
      console.log(respuesta);
    }).catch(()=> {
      console.log("erroooooooooor");     
    }).finally(()=> {
      console.log("completeeeeeeee");
    });
    
    let observableFromPromise$ = from(miPrimeraPromise);

    observableFromPromise$.subscribe(
      next => console.log("next", next),
      error => console.log("error", error),
      () => console.log("complete")
    );
  }

}
