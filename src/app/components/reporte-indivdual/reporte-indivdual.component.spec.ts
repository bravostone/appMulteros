import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteIndivdualComponent } from './reporte-indivdual.component';

describe('ReporteIndivdualComponent', () => {
  let component: ReporteIndivdualComponent;
  let fixture: ComponentFixture<ReporteIndivdualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteIndivdualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteIndivdualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
