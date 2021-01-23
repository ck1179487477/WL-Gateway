import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCONTROLComponentComponent } from './pro-control-component.component';

describe('ProCONTROLComponentComponent', () => {
  let component: ProCONTROLComponentComponent;
  let fixture: ComponentFixture<ProCONTROLComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProCONTROLComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProCONTROLComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
