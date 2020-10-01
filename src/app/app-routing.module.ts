import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesdashboardComponent } from './salesdashboard/salesdashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sales',
    pathMatch: 'full'
  },
  {
    path: 'sales',
    component: SalesdashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
