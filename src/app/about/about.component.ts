import { Component, OnInit } from '@angular/core';
import { interval, Observable, noop, fromEvent, of, forkJoin, Subject, AsyncSubject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, concat, merge } from 'rxjs/operators';
import { createHttpObservable } from '../util';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const subject = new AsyncSubject();

    // const series$ = subject.asObservable();

    // series$.subscribe(val => {
    //   console.log("sub 1 ", val);
    // });

    // subject.next(1);
    // subject.next(2);
    // subject.next(3);

    // subject.complete();

    // setTimeout(() => {
    //   series$.subscribe(val => {
    //     console.log("sub 2 ", val);
    //   });
    //   subject.next(4);
    // }, 3000);

  }

}
