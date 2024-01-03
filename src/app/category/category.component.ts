import { Component, OnInit , Output ,EventEmitter } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  @Output() newEvent= new EventEmitter

  categories:any
  ngOnInit(): void {
    this.service.getCategories().then((res=>res.json())).then(data=>this.categories=data)
  }

  listByCategory(category:any){
    console.log(category)
    this.newEvent.emit(category)
  }
  
  constructor(public service:MediatorService){

  }
}
