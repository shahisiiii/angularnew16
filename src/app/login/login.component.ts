import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MediatorService } from '../mediator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  logform = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),

    

  })
  ngOnInit(): void {
    
  }
  authenticate() {
    this.service.getToken(this.logform.value).then((res=>res.json())).then(data=>{
    let token = "Token "+data.token
    localStorage.setItem("token", token)
      this.router.navigate(['products'])
    })
  }
  
 constructor(public service:MediatorService,public router:Router){}
}
