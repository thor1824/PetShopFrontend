import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOverviewComponent } from './owner-overview.component';

describe('OwnerOverviewComponent', () => {
  let component: OwnerOverviewComponent;
  let fixture: ComponentFixture<OwnerOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
