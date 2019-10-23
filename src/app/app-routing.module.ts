import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PetshopOverviewComponent} from './petshop-overview/petshop-overview.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pets', component: PetshopOverviewComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
