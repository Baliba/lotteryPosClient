import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgameComponent } from './pgame.component';

describe('PgameComponent', () => {
  let component: PgameComponent;
  let fixture: ComponentFixture<PgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
