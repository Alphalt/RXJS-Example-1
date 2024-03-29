import { Component, OnInit } from '@angular/core';
import { Store } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curso';

  constructor(private store: Store) {

  }

  ngOnInit() {
    this.store.init();
  }
}
