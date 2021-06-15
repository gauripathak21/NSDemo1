import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LogincomponentComponent } from './logincomponent.component';

describe('LogincomponentComponent', () => {
  let component: LogincomponentComponent;
  let fixture: ComponentFixture<LogincomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
       ],
      declarations: [ LogincomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login values must entred', () => {
    fixture = TestBed.createComponent(LogincomponentComponent);
    expect(component).toBeTruthy();
  });
});
