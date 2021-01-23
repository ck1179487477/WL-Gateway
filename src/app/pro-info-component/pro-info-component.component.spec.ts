import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProINFOComponentComponent } from './pro-info-component.component';

describe('ProINFOComponentComponent', () => {
  let component: ProINFOComponentComponent;
  let fixture: ComponentFixture<ProINFOComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProINFOComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProINFOComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
