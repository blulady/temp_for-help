import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandDetailComponent } from './band-detail.component';

describe('BandDetailComponent', () => {
  let component: BandDetailComponent;
  let fixture: ComponentFixture<BandDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandDetailComponent]
    });
    fixture = TestBed.createComponent(BandDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
