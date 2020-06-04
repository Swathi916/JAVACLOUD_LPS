import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-edit-lpg',
  templateUrl: './edit-lpg.component.html',
  styleUrls: ['./edit-lpg.component.css']
})
export class EditLpgComponent implements OnInit {

loanToUpdate;

  constructor(private route : ActivatedRoute,private router:Router,
    private loanService:LoanService) { 
    this.route.queryParams.subscribe(data=>{
      this.loanToUpdate=data;
      console.log(this.loanToUpdate);
    });
  }
updateLoan(form:NgForm){
  this.loanService.updateData(form.value).subscribe(response=>{
    console.log(response);
    if(response.error === false){
      form.reset();
      this.router.navigateByUrl('/view-lpg-tbl');
          }




  });
}

  ngOnInit() {
  }

}
