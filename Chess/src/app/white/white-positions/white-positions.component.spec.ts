import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePositionsComponent } from './white-positions.component';

describe('WhitePositionsComponent', () => {
  let component: WhitePositionsComponent;
  let fixture: ComponentFixture<WhitePositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitePositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitePositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
