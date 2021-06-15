import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModegamesComponent } from './modegames.component';

describe('ModegamesComponent', () => {
  let component: ModegamesComponent;
  let fixture: ComponentFixture<ModegamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModegamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModegamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
