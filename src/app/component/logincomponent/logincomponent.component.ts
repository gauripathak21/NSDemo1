import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServicesService } from '../../service/app-services.service'

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  loginForm: FormGroup; 
  username:string="";
  password:any;
  isValidUser:boolean = false;
  submitted = false;
  loginArray = [{"username":"abc", "Password":"abc@123"},
                {"username":"gauri", "Password":"gauri@123"}
              ]
       
   constructor(private formBuilder: FormBuilder, private router: Router,private appService:AppServicesService) {
              this.loginForm = this.formBuilder.group({
                frm_Username: ['', [Validators.required]],
                frm_Password: ['', [Validators.required, Validators.minLength(8)]],
              })  
    }

  ngOnInit(): void {
  }

  get f() { return this.loginForm.controls; }

  Login(){
    this.submitted = true;
    // if (this.loginForm.invalid) {
    //   return;
    // }
    if((this.loginForm.get('frm_Username')?.value =='abc' && this.loginForm.get('frm_Password')?.value=='abc@123') || (this.loginForm.get('frm_Username')?.value =='gauri' && this.loginForm.get('frm_Password')?.value=='gauri@123')){
      this.isValidUser == true;
      this.appService.content.next(true);
      this.router.navigate(['/home']);
     }else{
       this.isValidUser == false;
    }
  }

  ngOnDestroy(){
   this.appService.content.unsubscribe();
  }
}
