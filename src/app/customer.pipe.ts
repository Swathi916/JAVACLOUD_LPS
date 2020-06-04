import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customer'
})
export class CustomerPipe implements PipeTransform {

  transform(search: any[],searchValue: any,fieldName) {
    if(!search){
    return [];
  }
if(!searchValue){
  return search;
}
searchValue=searchValue.toLowerCase();
// return search.filter(loans => {
//   if(isNaN(searchValue )){
//     return customer[fieldName].toLowerCase().includes(searchValue);
//   } else{
//     return customer[fieldName].toString().toLowerCase().includes(searchValue);
//   }
// });
// }
  }
}



