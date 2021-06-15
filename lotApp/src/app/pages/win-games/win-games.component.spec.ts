import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinGamesComponent } from './win-games.component';

describe('WinGamesComponent', () => {
  let component: WinGamesComponent;
  let fixture: ComponentFixture<WinGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
