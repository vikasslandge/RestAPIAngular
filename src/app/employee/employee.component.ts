import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {Employee} from '../employee/employee'
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  employees=[];
  emp: Employee;
 AllEmployeeFlag=false;
 EmployeeFlag=false;
 AddEmployee= false;

 Reset(){
   this.AllEmployeeFlag=false;
   this.EmployeeFlag=false;
  this.AddEmployee=false;
 }
  constructor(private service:ServiceService){}

 Choice(ch){
   this.Reset();
   switch(ch){
     case 1: this.AllEmployeeFlag =true;
            break;
      case 2 : this.EmployeeFlag=true;
            break;
      case 3 : this.AddEmployee=true;
            break;
   }
 }

 RegistrationForm = new FormGroup({
  name: new FormControl("",[Validators.required]),
  designation: new FormControl("",[Validators.required]),
  salary: new FormControl("",[Validators.required]),
});

  AllEmployees(){
    this.service.GetEmployeeDetails().subscribe(s=>this.employees=s);
  }

  GetEmployeeById(id){
    this.service.GetEmployee(id).subscribe(s=>this.emp=s);
     
  }
  AddEmploye( ){
    
    this.service.AddEmployee(this.RegistrationForm.value);
  }
  Register(){
    console.log(this.RegistrationForm.value);
  }
}
