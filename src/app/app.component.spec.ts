import { async, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`should have as title 'my-first-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-first-project');
  });

  it(`the title is 'my-awesome-app'`, (() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('my-awesome-app')
  }))

  // describe('AppComponent',()=>{
  //   let fixture:AppComponent;
  //   let loginMock:any;

  //   beforeEach(()=>{
  //     loginMock={
  //       isValidUser:jest.fn()
  //     };
      
  //   })
  //   describe('set up',()=>{
  //     it('should be initialized',()=>{
  //       fixture.isValidUser = loginMock;
  //       expect(fixture.isValidUser).toEqual(loginMock)
  //     })
  //   })
  // });

 
});
