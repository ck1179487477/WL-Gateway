import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfanComponent } from './dfan.component';

describe('DfanComponent', () => {
  let component: DfanComponent;
  let fixture: ComponentFixture<DfanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DfanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
