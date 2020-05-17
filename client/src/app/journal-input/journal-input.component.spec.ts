import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalInputComponent } from './journal-input.component';

describe('JournalInputComponent', () => {
  let component: JournalInputComponent;
  let fixture: ComponentFixture<JournalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
