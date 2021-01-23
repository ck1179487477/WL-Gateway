import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwsComponent } from './dws.component';

describe('DwsComponent', () => {
  let component: DwsComponent;
  let fixture: ComponentFixture<DwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
