import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogincomponentComponent } from './component/logincomponent/logincomponent.component'
import { AppServicesService } from './service/app-services.service';
@ViewChild(LogincomponentComponent)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   isValidUser:boolean=false;
   title:string="my-first-project";
   constructor(private loginCmp:LogincomponentComponent,
               private router:Router,
               private appService:AppServicesService) {
                  this.appService.content.subscribe(val=>{
                    this.isValidUser = val;
                  })
     }

    ngOnInit(): void {
      //this.loginCmp.isValidUser = this.isValidUser;
       
    }
    
    goToAddCustomer(){
      this.router.navigateByUrl('/add-customer');
    }
   
}
