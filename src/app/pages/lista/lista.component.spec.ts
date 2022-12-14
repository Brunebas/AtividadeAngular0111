import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPageComponent } from './lista.component';

describe('ListaPageComponent', () => {
  let component: ListaPageComponent;
  let fixture: ComponentFixture<ListaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
