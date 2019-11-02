import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './components/shared/dashboard/dashboard.component';
import {PetshopOverviewComponent} from './components/Pet/petshop-overview/petshop-overview.component';
import {PetDetailComponent} from './components/Pet/pet-detail/pet-detail.component';
import {PetCreateComponent} from './components/Pet/pet-create/pet-create.component';
import {UserLoginComponent} from './components/shared/user-login/user-login.component';
import {OwnerOverviewComponent} from './components/Owner/owner-overview/owner-overview.component';
import {OwnerDetailComponent} from './components/Owner/owner-detail/owner-detail.component';
import {OwnerCreateComponent} from './components/Owner/owner-create/owner-create.component';
import {AuthGuard} from './guard/auth.guard';

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
