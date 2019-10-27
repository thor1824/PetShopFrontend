import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/NamePending/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PetshopHeaderComponent} from './components/NamePending/petshop-header/petshop-header.component';
import {PetshopFooterComponent} from './components/NamePending/petshop-footer/petshop-footer.component';
import {PetshopOverviewComponent} from './components/Pet/petshop-overview/petshop-overview.component';
import {PetDetailComponent} from './components/Pet/pet-detail/pet-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ConfirmationDialogComponent} from './components/shared/confirmation-dialog/confirmation-dialog.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PetshopHeaderComponent,
    PetshopFooterComponent,
    PetshopOverviewComponent,
    PetDetailComponent,
    ConfirmationDialogComponent
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
    MatInputModule
  ],
  entryComponents: [ConfirmationDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
