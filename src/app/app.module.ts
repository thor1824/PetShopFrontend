import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './NamePending/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PetshopHeaderComponent } from './NamePending/petshop-header/petshop-header.component';
import { PetshopFooterComponent } from './NamePending/petshop-footer/petshop-footer.component';
import { PetshopOverviewComponent } from './Pet/petshop-overview/petshop-overview.component';
import { PetDetailComponent } from './Pet/pet-detail/pet-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PetshopHeaderComponent,
    PetshopFooterComponent,
    PetshopOverviewComponent,
    PetDetailComponent,
    ConfirmationDialogComponent
  ], imports: [BrowserModule, AppRoutingModule, FormsModule, MatDialogModule,
    MatButtonModule, BrowserAnimationsModule],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
