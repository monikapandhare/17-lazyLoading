import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users.component';
import { ActivatedComponent } from '../activated/activated.component';
import { InactivatedComponent } from '../inactivated/inactivated.component';


const routes : Routes = [
  {
    path : '', component : UsersComponent,
    children : [
      {path : '', component : ActivatedComponent, pathMatch : 'full'},
      {path : 'active', component : ActivatedComponent},
      {path : 'inactivate', component : InactivatedComponent},


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
export class UsersModule { 
  constructor(){
    console.log('users module is work');
  }
 

}
