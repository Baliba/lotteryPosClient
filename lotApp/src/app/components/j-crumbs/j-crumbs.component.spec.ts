import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JCrumbsComponent } from './j-crumbs.component';

describe('JCrumbsComponent', () => {
  let component: JCrumbsComponent;
  let fixture: ComponentFixture<JCrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JCrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JCrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
