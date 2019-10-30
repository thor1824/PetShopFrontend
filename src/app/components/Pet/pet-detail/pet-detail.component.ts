import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material';

import {ConfirmationDialogComponent} from '../../shared/confirmation-dialog/confirmation-dialog.component';
import {PetService} from '../../Services/pet.service';
import {Pet} from '../../../Shared/Entity/Pet';

@Component({
  selector: 'app-pet-detail', templateUrl: './pet-detail.component.html', styleUrls: ['./pet-detail.component.css']
})

export class PetDetailComponent implements OnInit
{
  edit = false;
  pet: Pet;
  imageUrl: string;
  name: string;
  title = 'angular-confirmation-dialog';

  constructor(private petService: PetService, private route: ActivatedRoute, private location: Location, public dialog: MatDialog)
  {
  }

  getPet(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id).subscribe(pet => this.pet = pet);
  }

  goBack(): void
  {
    this.location.back();
  }

  enableEdit(choice: boolean)
  {
    this.edit = choice;
  }

  openDialog(): void
  {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px', data: 'Do you want to save Changes?'
    });
    dialogRef.afterClosed().subscribe(result =>
    {
      if (result) {
        console.log('Yes clicked');
        this.saveChanges();
      }
    });
  }

  saveChanges(): void
  {
    console.log(this.name);
    console.log(this.pet.name);
    this.pet.name = this.name;
    this.pet.imageUrl = this.imageUrl;
    this.petService.editPet(this.pet);
    this.edit = false;
  }

  setData(): void
  {
    console.log('start');

  }


  ngOnInit()
  {
    this.getPet();
    this.setData();
  }

}
