import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';

const routes: Routes = [
  {path:'sender',component:SenderComponent},
  {path:'reciever',component:RecieverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
