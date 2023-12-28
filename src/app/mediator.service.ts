import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  obj1 = { uname:"" , psw:"" }

  getData(data:any){
    console.log(data)
    this.obj1=data
    console.log(this.obj1);
    
    
  }

  sendData():any{
    return this.obj1
  }

  constructor() { }
}
