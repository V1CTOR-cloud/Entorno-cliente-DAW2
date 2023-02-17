import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioclimaticoComponent } from './cambioclimatico.component';

describe('CambioclimaticoComponent', () => {
  let component: CambioclimaticoComponent;
  let fixture: ComponentFixture<CambioclimaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioclimaticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioclimaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
