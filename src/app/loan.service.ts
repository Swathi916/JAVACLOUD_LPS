import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http : HttpClient) { }

  postData(loan){
    return this.http.post<any>('http://localhost:8080/api1/addLoans', loan);
}
getData(){
  return this.http.get<any>('http://localhost:8080/api1/getLoans');
}

deleteData(loan){
  return this.http.delete<any>(`http://localhost:8080/api1/deleteLoans/${loan.loanNo}`);
}
updateData(loan){
  return this.http.put<any>(`http://localhost:8080/api1/updateLoans`,loan);
}


getDataByPage(pageNo , itemsPerPage , sortBy){
  if(!sortBy){
  return this.http.get<{content : any[] , totalElements : number}>(`http://localhost:8080/api1/getLoans/${pageNo}/${itemsPerPage}`);
}else{
  return this.http.get<{content : any[] , totalElements : number}>(`http://localhost:8080/api1/getLoans/${pageNo}/${itemsPerPage}/${sortBy}`);
}
}
}

//   constructor(private http: HttpClient) { }
//   postData(loans){
//     return this.http.post<any>('http://localhost:8080/api/loans', loans);
// }
// getData(){
//   return this.http.get<any>('http://localhost:8080/api/loans');
// }
// deleteData(loan){
//   return this.http.delete<any>(`http://localhost:8080/api/loans/${loan.loanNo}`);
 
// }
// getDataByPage(pageNo , itemsPerPage,sortBy){
//   if(!sortBy){
//   return this.http.get<{content : any[] , totalElements : number}>(`http://localhost:8080/api/loans/${pageNo}/${itemsPerPage}`);
//   }else{
//     return this.http.get<{content : any[] , totalElements : number}>(`http://localhost:8080/api/loans/${pageNo}/${itemsPerPage}/${sortBy}`);

//   }
// }

// updateData(loan){
//   return this.http.put<any>(`http://localhost:8080/api/loans`,loan);
// }
// }
