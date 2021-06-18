import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { LogincomponentComponent } from './component/logincomponent/logincomponent.component';
import { counterReducer } from './counter.reducer';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule, 
        MatFormFieldModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        StoreModule.forRoot({count: counterReducer})
      ],
      declarations: [
        AppComponent
      ],
      providers: [LogincomponentComponent],
    }).compileComponents();
  });
  //For Title Pass
  it(`should have as title 'my-first-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-first-project');
  });

  //For Title Failure
  it(`should not have null or undefined'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBeTruthy();
  });
  //check URL
  it(`router link unavailble'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBeTruthy();
    const router = TestBed.inject(Router);
    const mockUrlTree = router.parseUrl('');
    
  });

  
});
