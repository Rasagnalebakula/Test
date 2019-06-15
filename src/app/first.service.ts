import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

   
  display(){
    return ["Name","Sal"] 
  }
}
