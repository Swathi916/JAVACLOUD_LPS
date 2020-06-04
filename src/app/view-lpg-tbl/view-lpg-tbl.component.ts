import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
// export interface Loan{
//   loanNo: number;
//   loanType:string;
//   period:string;
//   loanAmount:string;
//   rateOfInterest:string;
// }
@Component({
  selector: 'app-view-lpg-tbl',
  templateUrl: './view-lpg-tbl.component.html',
  styleUrls: ['./view-lpg-tbl.component.css']
})
export class ViewLpgTblComponent implements OnInit {
  
  loan;
  pageNo=0;
  itemsPerPage=1;
  totalItems;
  message:string;
  fieldName;
  

  ngOnInit() {
    this.loanService.getDataByPage(this.pageNo , this.itemsPerPage,null).subscribe(response => {
      console.log(response);
      this.loan = response.content;
      this.totalItems = response.totalElements;
    });
  }

  constructor( private loanService: LoanService,
    private router:Router) { 
    this.getLoans(null);
  }
  getLoans(fieldName){
    this.loanService.getDataByPage(this.pageNo , this.itemsPerPage,fieldName).subscribe(response => {
      console.log(response);
      this.loan = response.content;
      this.totalItems = response.totalElements;
    });
  }
  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getLoans(null);
  }
  getSortedData(){
    console.log(this.fieldName);
    this.getLoans(this.fieldName); 
  }
    
    deleteLoan(loan){
      this.loanService.deleteData(loan).subscribe(response=>{
        console.log(response);
        if(response.error===false){
          this.getLoans(null);
          this.message = response.message;
          setTimeout(() => {
            this.message=null;
          }, 5000);
          
        }
      });
    }
    selectLoan(loan){
      this.router.navigate(['./edit-lpg'],{queryParams:loan});
    }

    }
    