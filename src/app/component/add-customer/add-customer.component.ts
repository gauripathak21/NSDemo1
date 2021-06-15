import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addCustomerForm: FormGroup; 
  submitted = false;
  addCustomerDataArr=[{'name':'','email':'','number':'','pan':''}]
  public sendArrToHome=[{}];

  constructor(public formBuilder: FormBuilder) { 
    this.addCustomerForm = this.formBuilder.group({
      frm_Name: ['', [Validators.required]],
      frm_Email: ['', [Validators.required]],
      frm_Number: ['', [Validators.required]],
      frm_PAN: ['', [Validators.required]],
     })  
  }

  ngOnInit(): void {
  }

  AddCustomer(){
    this.addCustomerDataArr.push(
       {'name': this.addCustomerForm.controls.frm_Name.value,
       'email':this.addCustomerForm.controls.frm_Email.value,
       'number':this.addCustomerForm.controls.frm_Number.value,
       'pan':this.addCustomerForm.controls.frm_PAN.value
      });
    this.sendArrToHome.push(this.addCustomerDataArr);   
  }
  get f() { return this.addCustomerForm.controls; }
}
