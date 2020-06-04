import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

export let apply ={
  "fullName":"",
  "password":"",
  "email":"",
  "gender":"",
  "dob":"",
  "role":"",
  "adharNo":0,
  "mobileNo":0,
  "applicant":[{
                 "loanType":"",
                "loanAmount":0,
                 "applicationStatus":""
  }]

}
@Component({
  selector: 'app-make-loan',
  templateUrl: './make-loan.component.html',
  styleUrls: ['./make-loan.component.css']
})

export class MakeLoanComponent implements OnInit {
  defValue="Requested";
  defaultValue="ROLE_CUSTOMER";
  defVal="Qwerty@123";
  message: any;
  message1;
  constructor(private clientService: ClientService,private router:Router) { 
    
  }
  
  ngOnInit() {
  }
  postCustomer(form:NgForm){
    apply.fullName=form.value.fullName;
    apply.email=form.value.email;
    apply.password=form.value.password;
    apply.gender=form.value.gender;
    apply.mobileNo=form.value.mobileNo;
    apply.adharNo=form.value.adharNo;
    apply.role=form.value.role;
    apply.dob=form.value.dob;
    apply.applicant[0].loanType=form.value.loanType;
    apply.applicant[0].loanAmount=form.value.loanAmount;
    apply.applicant[0].applicationStatus=form.value.applicationStatus;

    this.clientService.postData(apply).subscribe(response =>{
      console.log(response);
          
    if(response.error ===false){
      this.message=response.message;
      setTimeout(() =>{
        this.message= null;
      },5000);
      form.reset();
       this.router.navigateByUrl('/login');
    }
    
    else if(response.error ===true){
      this.message1=response.message;
      setTimeout(() =>{
        this.message1= null;
      },50000);
    }

    // form.reset();
  });
    
  }

}
