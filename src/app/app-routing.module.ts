import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
  {path : '', component  : DashboardComponent},
  {
   path : 'products',
   loadChildren : () => 
    import('./shared/components/products/producs/producs.module').then((m) => m.ProducsModule)

  },
  {
    path : 'users',
    loadChildren : () =>
    import('./shared/components/users/users/users.module').then((m) => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('app module is work');
  }
}
