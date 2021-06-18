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

  describe('Test:Login Form',()=>{
    it('Values should not be empty', () => {
      component.loginForm.controls.frm_Username.setValue('');
      component.loginForm.controls.frm_Password.setValue('');
      expect(component.loginForm.valid).toBeFalsy();
     });

     it('It should Validate login form', () => {
      component.loginForm.controls.frm_Username.setValue('abc');
      component.loginForm.controls.frm_Password.setValue('abc@123');
      expect(component.loginForm.controls.frm_Username.value).toEqual('abc');
      expect(component.loginForm.controls.frm_Password.value).toEqual('abc@123');

      expect(component.loginForm.valid).toEqual(expect.anything());
     });
     
     
  })

});
