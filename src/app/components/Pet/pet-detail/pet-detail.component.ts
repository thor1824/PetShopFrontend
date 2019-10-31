import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PetService} from '../../../Services/pet.service';
import {Pet} from '../../../Shared/Entity/Pet';
import {FormBuilder, Validators} from '@angular/forms';
import {DialogService} from '../../../Services/dialog.service';

@Component({
  selector: 'app-pet-detail', templateUrl: './pet-detail.component.html', styleUrls: ['./pet-detail.component.css']
})

export class PetDetailComponent implements OnInit {
  edit = false;
  pet: Pet;
  title = 'angular-confirmation-dialog';

  updatePetForm = this.fb.group({
    id: ['', Validators.required],
    imageUrl: [''],
    name: ['', Validators.required],
    species: ['', Validators.required],
    color: ['', Validators.required],
    price: ['', Validators.required],
    birthDate: ['', Validators.required],
    soldDate: ['', Validators.required]
  });

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private win: DialogService
  ) {
  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id).subscribe(pet => {
      this.updatePetForm.patchValue({
        id: pet.id,
        name: pet.name,
        imageUrl: pet.imageUrl,
        species: pet.pType,
        color: pet.color,
        price: pet.price,
        birthDate: pet.birthDate,
        soldDate: pet.soldDate
      });
      this.pet = pet;
    });
  }

  goBack(): void {
    this.location.back();
  }

  enableEdit(choice: boolean) {
    this.edit = choice;
  }

  openEditDialog(): void {
    this.win.openConfirmationDialog('Do you want to save Changes?').afterClosed().subscribe(result => {
      if (result) {
        this.saveChanges();
      }
    });
  }

  saveChanges(): void {
    if (this.updatePetForm.valid) {
      this.petService.editPet(this.updatePetForm.value).subscribe(result => {
        console.log(result);
        this.getPet();
      });
      this.edit = false;
    } else {
      this.win.openErrorDialog(400, 'something went wrong, Forms not valid');
    }
  }

  ngOnInit() {
    this.getPet();
  }

}
