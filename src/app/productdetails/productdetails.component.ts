import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  productDetails:any
  ngOnInit(): void {
    let id = this.rout.snapshot.paramMap.get("id")
    this.service.getProductDetials(id).then((res=>res.json())).then((data=>this.productDetails=data))
  }

  constructor(public rout: ActivatedRoute, public service: MediatorService) {
    
  }
}
