import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {DashboardComponent} from './Component/shared/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PetshopHeaderComponent} from './Component/shared/petshop-header/petshop-header.component';
import {PetshopFooterComponent} from './Component/shared/petshop-footer/petshop-footer.component';
import {PetshopOverviewComponent} from './Component/Pet/petshop-overview/petshop-overview.component';
import {PetDetailComponent} from './Component/Pet/pet-detail/pet-detail.component';
import {ConfirmationDialogComponent} from './Component/shared/confirmation-dialog/confirmation-dialog.component';
import {PetCreateComponent} from './Component/Pet/pet-create/pet-create.component';
import {UserLoginComponent} from './Component/shared/user-login/user-login.component';
import {OwnerOverviewComponent} from './Component/Owner/owner-overview/owner-overview.component';
import {OwnerDetailComponent} from './Component/Owner/owner-detail/owner-detail.component';
import {OwnerCreateComponent} from './Component/Owner/owner-create/owner-create.component';
import {ErrorDialogComponent} from './Component/shared/error-dialog/error-dialog.component';

import {MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PetshopHeaderComponent,
    PetshopFooterComponent,
    PetshopOverviewComponent,
    PetDetailComponent,
    ConfirmationDialogComponent,
    PetCreateComponent,
    UserLoginComponent,
    OwnerOverviewComponent,
    OwnerDetailComponent,
    OwnerCreateComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    ErrorDialogComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
