import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatecodeComponent } from './statecode.component';

describe('StatecodeComponent', () => {
  let component: StatecodeComponent;
  let fixture: ComponentFixture<StatecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
