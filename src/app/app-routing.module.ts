import { NgModule } from "@angular/core";
import { EditLpgComponent } from "./edit-lpg/edit-lpg.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { MakeLoanComponent } from "./make-loan/make-loan.component";
import { UpdateCustomerComponent } from "./update-customer/update-customer.component";
import { LoginComponent } from "./login/login.component";
import { ViewClientComponent } from "./view-client/view-client.component";
import { ViewLpgComponent } from "./view-lpg/view-lpg.component";
import { ViewLpgTblComponent } from "./view-lpg-tbl/view-lpg-tbl.component";
//import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterModule } from "@angular/router";
import { AddLoanLpgComponent } from "./add-loan-lpg/add-loan-lpg.component";
import { ViewApplicationComponent } from "./view-application/view-application.component";
import { AuthGaurd } from "./auth.guard";
import { ViewDetailsComponent } from "./view-details/view-details.component";
import { LoanLoginComponent } from "./loan-login/loan-login.component";
import { CheckStatusComponent } from "./check-status/check-status.component";
import { HomeComponent } from "./home/home.component";
import { ViewCustomerComponent } from "./view-customer/view-customer.component";

@NgModule({
      imports: [
            RouterModule.forRoot([
                  {
                        path: 'edit-lpg', component: EditLpgComponent, canActivate: [AuthGaurd],
                        data: { roles: ['ROLE_ADMIN'] }
                  },
                  {
                        path: 'add-client', component: AddClientComponent, canActivate: [AuthGaurd],
                        data: { roles: ['ROLE_ADMIN'] }
                  },
                  {
                        path: 'view-details', component: ViewDetailsComponent, canActivate: [AuthGaurd],
                        data: { roles: ['ROLE_CUSTOMER'] }
                  },
                  {
                        path: 'view-customer', component: ViewCustomerComponent, canActivate: [AuthGaurd],
                        data: { roles: ['ROLE_ADMIN','ROLE_APPROVAL'] }
                  },
                  {
                        path: 'home', component: HomeComponent },
                  
                  {
                        path: 'loan-login', component: LoanLoginComponent, canActivate: [AuthGaurd],
                        data: { roles: ['ROLE_CUSTOMER'] }
                  },
                  {
                        path: 'check-status', component: CheckStatusComponent, canActivate: [AuthGaurd],
                        data: { roles: ['ROLE_CUSTOMER'] }
                  },
                  {
                        path: 'add-loan-lpg', component: AddLoanLpgComponent, canActivate: [AuthGaurd],
                        data: { roles: ['ROLE_ADMIN'] }
                  },
                  { path: 'make-loan', component: MakeLoanComponent },
                  // {path:'update-customer', component: UpdateCustomerComponent},
                  { path: 'login', component: LoginComponent },
                  {
                        path: 'view-client', component: ViewClientComponent, canActivate: [AuthGaurd],
                        data: { roles: ['ROLE_ADMIN'] }
                  },
                  { path: 'view-lpg', component: ViewLpgComponent },
                  {
                        path: 'view-lpg-tbl', component: ViewLpgTblComponent, canActivate: [AuthGaurd],
                        data: { roles: ['ROLE_ADMIN'] }
                  },
                  {
                        path: 'view-application', component: ViewApplicationComponent, canActivate: [AuthGaurd],
                        data: { roles: ['ROLE_APPROVAL'] }
                  }
                  //   {path:'**', component: PageNotFoundComponent},
                  //   {path:'' ,redirectTo :'/login',pathMatch:'full'}


            ])
      ],
      exports: [
            RouterModule
      ]
})
export class AppRoutingModule {

}
