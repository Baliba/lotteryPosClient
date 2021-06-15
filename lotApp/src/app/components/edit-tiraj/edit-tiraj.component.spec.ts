import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTirajComponent } from './edit-tiraj.component';

describe('EditTirajComponent', () => {
  let component: EditTirajComponent;
  let fixture: ComponentFixture<EditTirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTirajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
