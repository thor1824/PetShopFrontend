import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/NamePending/dashboard/dashboard.component';
import { PetshopOverviewComponent } from './components/Pet/petshop-overview/petshop-overview.component';
import { PetDetailComponent } from './components/Pet/pet-detail/pet-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pets', component: PetshopOverviewComponent },
  { path: 'pets/:id', component: PetDetailComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
