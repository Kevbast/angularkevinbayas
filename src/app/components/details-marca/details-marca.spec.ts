import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMarca } from './details-marca';

describe('DetailsMarca', () => {
  let component: DetailsMarca;
  let fixture: ComponentFixture<DetailsMarca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsMarca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMarca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
