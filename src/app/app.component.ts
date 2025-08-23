import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectiveNgIfVsIfComponent } from './structural-directive-ng-if-vs-if/structural-directive-ng-if-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from './structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import { StructuralDirectivesNgSwitchVsSwitchComponent } from './structural-directives-ng-switch-vs-switch/structural-directives-ng-switch-vs-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet ,
    // DataBindingComponent , 
    // DirectivesComponent ,
    // StructuralDirectiveNgIfVsIfComponent,
    // StructuralDirectiveNgforVsForComponent,
    // StructuralDirectivesNgSwitchVsSwitchComponent,
    // AttributeDirectivesComponent,
    CustomDirectivesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_19_tutorial';
}
