import {BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MakeLoanComponent } from './make-loan/make-loan.component';
import { EditLpgComponent } from './edit-lpg/edit-lpg.component';
import { ViewLpgComponent } from './view-lpg/view-lpg.component';
import { ViewLpgTblComponent } from './view-lpg-tbl/view-lpg-tbl.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { AddLoanLpgComponent } from './add-loan-lpg/add-loan-lpg.component';
import { UpdateLoanLpgComponent } from './update-loan-lpg/update-loan-lpg.component';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoanPipe } from './loan.pipe';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { ClientPipe } from './client.pipe';
import { ClientService } from './client.service';
import { RequestInterceptor } from 'src/app/request.interceptor';
import { from } from 'rxjs';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { LoanLoginComponent } from './loan-login/loan-login.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CustomerPipe } from './customer.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MakeLoanComponent,
    EditLpgComponent,
    ViewLpgComponent,
    ViewLpgTblComponent,
    AddClientComponent,
    ViewClientComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AddLoanLpgComponent,
    UpdateLoanLpgComponent,
    LoanPipe,
    ViewApplicationComponent,
    ClientPipe,
    ViewDetailsComponent,
    LoanLoginComponent,
    CheckStatusComponent,
    HomeComponent,
    ViewCustomerComponent,
    CustomerPipe,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgxPaginationModule
    
    
  ],
  providers: [
    ClientService,
    {
 provide : HTTP_INTERCEPTORS,
 useClass : RequestInterceptor,
 multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
