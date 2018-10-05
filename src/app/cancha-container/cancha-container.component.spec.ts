import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchaContainerComponent } from './cancha-container.component';

describe('CanchaContainerComponent', () => {
  let component: CanchaContainerComponent;
  let fixture: ComponentFixture<CanchaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanchaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
