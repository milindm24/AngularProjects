import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackPositionsComponent } from './black-positions.component';

describe('BlackPositionsComponent', () => {
  let component: BlackPositionsComponent;
  let fixture: ComponentFixture<BlackPositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackPositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
