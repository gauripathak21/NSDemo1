import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { LogincomponentComponent } from './component/logincomponent/logincomponent.component';

const routes: Routes = [
  { path: '', component: LogincomponentComponent},
  { path: 'home', component: HomeComponentComponent},
  { path: 'add-customer', component: AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
