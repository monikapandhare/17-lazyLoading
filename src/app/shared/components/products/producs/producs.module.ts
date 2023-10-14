import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products.component';
import { PhonesComponent } from '../phones/phones.component';
import { LaptopsComponent } from '../laptops/laptops.component';
import { TabsComponent } from '../tabs/tabs.component';


const routes : Routes = [
  {
    path : '', component : ProductsComponent,
    children : [
      {path : '' , component : PhonesComponent, pathMatch : 'full'},
      {path : 'phone' , component : PhonesComponent},
      {path : 'laptop' , component : LaptopsComponent},
      {path : 'tab' , component : TabsComponent},



    ]
  }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProducsModule {
  constructor(){
    console.log('product module is work');
    
  }
 }
