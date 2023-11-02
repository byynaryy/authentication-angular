import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPaiementsComponent } from './mes-paiements.component';

describe('MesPaiementsComponent', () => {
  let component: MesPaiementsComponent;
  let fixture: ComponentFixture<MesPaiementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesPaiementsComponent]
    });
    fixture = TestBed.createComponent(MesPaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
