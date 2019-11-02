import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './Component/shared/dashboard/dashboard.component';
import {PetshopOverviewComponent} from './Component/Pet/petshop-overview/petshop-overview.component';
import {PetDetailComponent} from './Component/Pet/pet-detail/pet-detail.component';
import {PetCreateComponent} from './Component/Pet/pet-create/pet-create.component';
import {UserLoginComponent} from './Component/shared/user-login/user-login.component';
import {OwnerOverviewComponent} from './Component/Owner/owner-overview/owner-overview.component';
import {OwnerDetailComponent} from './Component/Owner/owner-detail/owner-detail.component';
import {OwnerCreateComponent} from './Component/Owner/owner-create/owner-create.component';
import {AuthGuard} from './Guard/auth.guard';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pets', component: PetshopOverviewComponent, canActivate: [AuthGuard]},
  {path: 'pets/:id', component: PetDetailComponent, canActivate: [AuthGuard]},
  {path: 'create/pet', component: PetCreateComponent, canActivate: [AuthGuard]},
  {path: 'login', component: UserLoginComponent},
  {path: 'owners', component: OwnerOverviewComponent, canActivate: [AuthGuard]},
  {path: 'owners/:id', component: OwnerDetailComponent, canActivate: [AuthGuard]},
  {path: 'create/owner', component: OwnerCreateComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
