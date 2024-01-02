import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categories:any
  ngOnInit(): void {
    this.service.getCategories().then((res=>res.json())).then(data=>this.categories=data)
  }
  listByCategory(category:any){
    console.log(category)
  }
  constructor(public service:MediatorService){

  }
}
