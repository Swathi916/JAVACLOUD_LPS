import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  defaultValue="ROLE_APPROVAL";
  
constructor(private clientService : ClientService,private router:Router) { }

ngOnInit() {
 
}
message:string;
message1;
postClient(form : NgForm){
  this.clientService.postData(form.value).subscribe(response =>{
    console.log(response);
          
    if(response.error ===false){
      this.message=response.message;
      setTimeout(() =>{
        this.message= null;
      },5000);
      form.reset();
      this.router.navigateByUrl('/view-client');
    }
    
    else if(response.error ===true){
      this.message1=response.message;
      setTimeout(() =>{
        this.message1= null;
      },5000);
    }

    // form.reset();
  });



  
}
}
