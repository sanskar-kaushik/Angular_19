import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgSwitchVsSwitchComponent } from './structural-directives-ng-switch-vs-switch.component';

describe('StructuralDirectivesNgSwitchVsSwitchComponent', () => {
  let component: StructuralDirectivesNgSwitchVsSwitchComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgSwitchVsSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivesNgSwitchVsSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesNgSwitchVsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
