import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopFooterComponent } from './petshop-footer.component';

describe('PetshopFooterComponent', () => {
  let component: PetshopFooterComponent;
  let fixture: ComponentFixture<PetshopFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetshopFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshopFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
