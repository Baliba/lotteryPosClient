import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTirajComponent } from './add-tiraj.component';

describe('AddTirajComponent', () => {
  let component: AddTirajComponent;
  let fixture: ComponentFixture<AddTirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTirajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
