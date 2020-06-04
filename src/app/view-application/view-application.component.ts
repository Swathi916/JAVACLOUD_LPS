import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantService } from '../applicant.service';
import { ClientService } from '../client.service';

export let applicant = {
  "fullName": "",
  "password": "",
  "email": "",
  "gender": "",
  "dob": "",
  "role": "",
  "adharNo": 0,
  "mobileNo": 0,
  "applicant": [{
    "loanType": "",
    "loanAmount": 0,
    "applicationStatus": ""
  }]
}

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  user;
  message: string;
  message1: string;
  // p: number = 1; 
  searchValue;
  pageNo = 0;
itemsPerPage = 2;
totalItems ;
fieldName;
// client;
// searchValue;
  constructor(private clientService : ClientService,private applicantService: ApplicantService,
    private router:Router ) {
      this.getClient(this.fieldName);
   }

  ngOnInit() : void{
    this.clientService.getApplicantByPage(this.pageNo , this.itemsPerPage , null).subscribe(response => {
      console.log(response);
      this.user = response.content;
      this.totalItems = response.totalElements;
    });
  }
  getClient(fieldName){
    this.clientService.getApplicantByPage(this.pageNo , this.itemsPerPage, fieldName).subscribe(response => {
      console.log(response);
      this.user = response.content;
      this.totalItems = response.totalElements;
    });
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getClient(null);
  }
  getSortedData(){
    console.log(this.fieldName);
    this.getClient(this.fieldName); 
  }

  
  selectApprove(applicant) {
    this.applicantService.updateApprove(applicant).subscribe(response => {
      console.log(response);
      if (response.error === false) {
        this.getClient(null);
        this.message1 = response.message;
        setTimeout(() => {
          this.message1 = null;
        }, 5000);
      }
    });
  }

  selectReject(applicant) {
    this.applicantService.updateReject(applicant).subscribe(response => {
      console.log(response);
      if (response.error === false) {
        this.getClient(null);
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
        }, 5000);
      }
    });
  }
  


}
