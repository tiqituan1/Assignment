import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QmkComponent } from './qmk.component';

describe('QmkComponent', () => {
  let component: QmkComponent;
  let fixture: ComponentFixture<QmkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QmkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
