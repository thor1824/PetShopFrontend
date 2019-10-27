import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopHeaderComponent } from './petshop-header.component';

describe('PetshopHeaderComponent', () => {
  let component: PetshopHeaderComponent;
  let fixture: ComponentFixture<PetshopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetshopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
