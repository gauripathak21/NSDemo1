import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogincomponentComponent } from './component/logincomponent/logincomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { DemoMaterialModule } from './material-module';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { NavBarComponent } from './utlities/nav-bar/nav-bar.component';
import { StoreModule } from '@ngrx/store';
//import { addProductReducer } from './reducers/product.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './counter.reducer';
@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent,
    HomeComponentComponent,
    AddCustomerComponent,
    NavBarComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    DemoMaterialModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [LogincomponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
