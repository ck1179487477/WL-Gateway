import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlightComponent } from './dlight.component';

describe('DlightComponent', () => {
  let component: DlightComponent;
  let fixture: ComponentFixture<DlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
