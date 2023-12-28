import { Component,OnInit ,Input } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent implements OnInit{

  @Input() objdata:any
  ngOnInit():void{
    this.objdata=this.m.obj1
  }

  constructor(public m:MediatorService)
  {}
}
