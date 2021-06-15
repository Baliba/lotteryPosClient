import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirajComponent } from './tiraj.component';

describe('TirajComponent', () => {
  let component: TirajComponent;
  let fixture: ComponentFixture<TirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
