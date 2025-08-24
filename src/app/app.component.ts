import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { DirectivesComponent } from './Components/directives/directives.component';
import { StructuralDirectiveNgIfVsIfComponent } from './Components/structural-directive-ng-if-vs-if/structural-directive-ng-if-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from './Components/structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import { StructuralDirectivesNgSwitchVsSwitchComponent } from './Components/structural-directives-ng-switch-vs-switch/structural-directives-ng-switch-vs-switch.component';
import { AttributeDirectivesComponent } from './Components/attribute-directives/attribute-directives.component';
import { CustomDirectivesComponent } from './Components/custom-directives/custom-directives.component';
import { SignalComponent } from './Components/signal/signal.component';
import { LinkedSignalComponent } from './Components/linked-signal/linked-signal.component';


@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet ,
    DataBindingComponent , 
    DirectivesComponent ,
    StructuralDirectiveNgIfVsIfComponent,
    StructuralDirectiveNgforVsForComponent,
    StructuralDirectivesNgSwitchVsSwitchComponent,
    AttributeDirectivesComponent,
    CustomDirectivesComponent,
    SignalComponent,
    LinkedSignalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_19_tutorial';
}
