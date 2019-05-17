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
  EditFlag=false;
  Reset(){
   this.AllEmployeeFlag=false;
   this.EmployeeFlag=false;
    this.AddEmployee=false;
    this.EditFlag=false;
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
      case 4 : this.EditFlag = true;
            break;      
   }
 }

 RegistrationForm = new FormGroup({
  Name: new FormControl("",[Validators.required]),
  Designation: new FormControl("",[Validators.required]),
  Salary: new FormControl("",[Validators.required])
});
EditForm = new FormGroup({
  Name: new FormControl(),
  Designation: new FormControl(),
  Salary: new FormControl()
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
  Edit(emp:Employee){
    //console.log(e);
    
   this.EditForm.setValue(emp);
   
    this.Choice(4);
    // this.servie.GetEmployee(e)
  }
  Register(){
    console.log(this.RegistrationForm.value);
  }
}
