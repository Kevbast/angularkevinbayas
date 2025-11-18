import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarCompra } from './insertar-compra';

describe('InsertarCompra', () => {
  let component: InsertarCompra;
  let fixture: ComponentFixture<InsertarCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertarCompra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarCompra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
