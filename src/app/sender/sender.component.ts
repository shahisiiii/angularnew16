import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  x:any
  sendData(data:any){
    console.log(data)
    this.m.getData
    this.x=data
  }
  constructor(public m:MediatorService){
    
  }

}
