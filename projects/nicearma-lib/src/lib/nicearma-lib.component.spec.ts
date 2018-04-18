import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicearmaLibComponent } from './nicearma-lib.component';

describe('NicearmaLibComponent', () => {
  let component: NicearmaLibComponent;
  let fixture: ComponentFixture<NicearmaLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicearmaLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicearmaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
