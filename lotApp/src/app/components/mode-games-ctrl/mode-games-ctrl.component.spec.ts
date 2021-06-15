import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeGamesCtrlComponent } from './mode-games-ctrl.component';

describe('ModeGamesCtrlComponent', () => {
  let component: ModeGamesCtrlComponent;
  let fixture: ComponentFixture<ModeGamesCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeGamesCtrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeGamesCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
