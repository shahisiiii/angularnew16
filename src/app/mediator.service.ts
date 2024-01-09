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
  fetchToken() {
    return localStorage.getItem("token")
  }
  getProduct() {
    let header = new Headers() 
    header.append('content-Type', 'application/json')  
    let token = this.fetchToken()
    if (token) {
      header.append('Autherization',token)
    }
    let options: any = {
      method: 'POST',
      headers:header
    }
    return fetch(`https://fakestoreapi.com/products`)
  }
  getProductDetials(id:any) {
    return fetch(`https://fakestoreapi.com/products/${id}/`)
  }
  getCategories(){
    return fetch(`https://fakestoreapi.com/products/categories`)
  }
  getProductByCategories(category:any){
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
  }
  getToken(data: any) {
  
    let header = new Headers()
    header.append('content-Type', 'application/json')
    let raw = JSON.stringify(data)
    let options: any = {
      method: 'POST',
      body: raw,
      headers: header
    }
    
  
    return fetch(`http://127.0.0.1:8000/products/`)
  }
  constructor() { }
}
