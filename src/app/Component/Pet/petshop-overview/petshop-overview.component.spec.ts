import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopOverviewComponent } from './petshop-overview.component';

describe('PetshopOverviewComponent', () => {
  let component: PetshopOverviewComponent;
  let fixture: ComponentFixture<PetshopOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetshopOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshopOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
