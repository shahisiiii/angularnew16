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
  getProduct(){
    return fetch(`https://fakestoreapi.com/products`)
  }
  getProductDetials(id:any) {
    return fetch(`https://fakestoreapi.com/products/${id}/`)
  }
  getCategories(){
    return fetch(`https://fakestoreapi.com/products/categories`)
  }
  constructor() { }
}
