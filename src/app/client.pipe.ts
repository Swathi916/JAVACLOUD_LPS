import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'client'
})
export class ClientPipe implements PipeTransform {

  transform(clients:any[], searchValue:string,fieldName):any{
    if(!clients){
      return [];
    }
    if(!searchValue){
      return clients;
    }
    searchValue = searchValue.toLowerCase();
      return clients.filter(clients=>{
        return clients[fieldName].toLowerCase().includes(searchValue)});
    }
  }



