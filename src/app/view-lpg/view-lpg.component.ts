import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';

// export interface Loan{
//   loanNo: number;
//   loanType:string;
//   period:string;
//   loanAmount:string;
//   rateOfInterest:string;
// }

@Component({
  selector: 'app-view-lpg',
  templateUrl: './view-lpg.component.html',
  styleUrls: ['./view-lpg.component.css']
})
export class ViewLpgComponent implements OnInit {


  loan;
  pageNo=0;
  itemsPerPage=1;
  totalItems;
  message:string;
  fieldName;
  seachValue;
  

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

  
    // getLoans(){
    //   this.loanService.getData().subscribe(response=>{
    //     console.log(response);
    //     this.loan=response;
    //   });
    // }
     


}
