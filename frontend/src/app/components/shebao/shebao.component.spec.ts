import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShebaoComponent } from './shebao.component';

describe('ShebaoComponent', () => {
  let component: ShebaoComponent;
  let fixture: ComponentFixture<ShebaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShebaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShebaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
