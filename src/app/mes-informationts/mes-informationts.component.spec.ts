import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesInformationtsComponent } from './mes-informationts.component';

describe('MesInformationtsComponent', () => {
  let component: MesInformationtsComponent;
  let fixture: ComponentFixture<MesInformationtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesInformationtsComponent]
    });
    fixture = TestBed.createComponent(MesInformationtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
