import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageUserComponent } from './garage-user.component';

describe('BoardUserComponent', () => {
  let component: GarageUserComponent;
  let fixture: ComponentFixture<GarageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
