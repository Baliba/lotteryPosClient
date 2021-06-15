import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTirajComponent } from './p-tiraj.component';

describe('PTirajComponent', () => {
  let component: PTirajComponent;
  let fixture: ComponentFixture<PTirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTirajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
