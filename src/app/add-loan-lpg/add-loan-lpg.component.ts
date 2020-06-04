import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-loan-lpg',
  templateUrl: './add-loan-lpg.component.html',
  styleUrls: ['./add-loan-lpg.component.css']
})
export class AddLoanLpgComponent implements OnInit {

  constructor(private loanService: LoanService,private router:Router) { }
  ngOnInit() {
  }
  message:string;
postLoans(form:NgForm){
  this.loanService.postData(form.value).subscribe(response=>{
    console.log(response);
    if(response.error ===false){
      this.message=response.message;
      setTimeout(() =>{
        this.message= null;
      },5000);
      this.router.navigateByUrl('/view-lpg');
    }
  });
}
}
