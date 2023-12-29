import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{

  products:any

  ngOnInit(): void {
    this.service.getProduct().then((res=>res.json())).then((data=>this.products=data))

  }
  redirectToProductDetails(id: any) {
    // console.log(id)
    return this.route.navigate(['productdetails/',id])
  }
  
  constructor(public service:MediatorService,public route:Router){

  }
}
