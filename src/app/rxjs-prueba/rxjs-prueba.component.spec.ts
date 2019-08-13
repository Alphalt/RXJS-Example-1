import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPruebaComponent } from './rxjs-prueba.component';

describe('RxjsPruebaComponent', () => {
  let component: RxjsPruebaComponent;
  let fixture: ComponentFixture<RxjsPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
