import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'sender',component:SenderComponent},
  {path:'reciever',component:RecieverComponent},
  {path:'productdetails/:id',component:ProductdetailsComponent},
  {path:'productlist',component:ProductlistComponent},
  { path: 'categories', component: CategoryComponent },
  { path: '', component: LoginComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
