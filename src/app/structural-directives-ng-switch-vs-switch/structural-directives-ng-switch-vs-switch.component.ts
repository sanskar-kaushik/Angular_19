import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives-ng-switch-vs-switch',
  imports: [CommonModule],
  templateUrl: './structural-directives-ng-switch-vs-switch.component.html',
  styleUrl: './structural-directives-ng-switch-vs-switch.component.css'
})
export class StructuralDirectivesNgSwitchVsSwitchComponent {
  count: number = 0;
  set(x: number){
    this.count = x;
  }
}
