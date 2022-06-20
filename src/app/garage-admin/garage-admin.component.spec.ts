import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageAdminComponent } from './garage-admin.component';

describe('GarageAdminComponent', () => {
  let component: GarageAdminComponent;
  let fixture: ComponentFixture<GarageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
