import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaneamientoComponent } from './saneamiento.component';

describe('SaneamientoComponent', () => {
  let component: SaneamientoComponent;
  let fixture: ComponentFixture<SaneamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaneamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaneamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
