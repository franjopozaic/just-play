import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongInputComponent } from './song-input.component';

describe('SongInputComponent', () => {
  let component: SongInputComponent;
  let fixture: ComponentFixture<SongInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
