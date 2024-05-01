import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionAppPage } from './configuracion-app.page';

describe('ConfiguracionAppPage', () => {
  let component: ConfiguracionAppPage;
  let fixture: ComponentFixture<ConfiguracionAppPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
