import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/shared/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PetshopHeaderComponent} from './components/shared/petshop-header/petshop-header.component';
import {PetshopFooterComponent} from './components/shared/petshop-footer/petshop-footer.component';
import {PetshopOverviewComponent} from './components/Pet/petshop-overview/petshop-overview.component';
import {PetDetailComponent} from './components/Pet/pet-detail/pet-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ConfirmationDialogComponent} from './components/shared/confirmation-dialog/confirmation-dialog.component';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PetCreateComponent} from './components/Pet/pet-create/pet-create.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './components/shared/user-login/user-login.component';
import { OwnerOverviewComponent } from './components/Owner/owner-overview/owner-overview.component';
import { OwnerDetailComponent } from './components/Owner/owner-detail/owner-detail.component';
import { OwnerCreateComponent } from './components/Owner/owner-create/owner-create.component';
import { ErrorDialogComponent } from './components/shared/error-dialog/error-dialog.component';


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
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRippleModule
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    ErrorDialogComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule
{
}
