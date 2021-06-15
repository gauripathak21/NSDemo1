import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../counter.reducer';

import { MyCounterComponent } from './my-counter.component';

describe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({count: counterReducer})
      ],
      declarations: [ MyCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
