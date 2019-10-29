import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './components/NamePending/dashboard/dashboard.component';
import {PetshopOverviewComponent} from './components/Pet/petshop-overview/petshop-overview.component';
import {PetDetailComponent} from './components/Pet/pet-detail/pet-detail.component';
import {PetCreateComponent} from './components/Pet/pet-create/pet-create.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pets', component: PetshopOverviewComponent},
  {path: 'pets/:id', component: PetDetailComponent},
  {path: 'create_pet', component: PetCreateComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
