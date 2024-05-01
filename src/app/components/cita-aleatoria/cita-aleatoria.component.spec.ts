import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CitaAleatoriaComponent } from './cita-aleatoria.component';

describe('CitaAleatoriaComponent', () => {
  let component: CitaAleatoriaComponent;
  let fixture: ComponentFixture<CitaAleatoriaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CitaAleatoriaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitaAleatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
