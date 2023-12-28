import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator.service';

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
  constructor(public service:MediatorService){

  }
}
