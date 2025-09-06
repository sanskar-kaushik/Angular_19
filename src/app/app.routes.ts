import { Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StructuralDirectiveNgIfVsIfComponent } from './Components/structural-directive-ng-if-vs-if/structural-directive-ng-if-vs-if.component';
import { AttributeDirectivesComponent } from './Components/attribute-directives/attribute-directives.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';

export const routes: Routes = [
  { path: '' , redirectTo: "user" , pathMatch:"full"},
  { path: 'user', component: UserComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'structural-directives', component: StructuralDirectiveNgIfVsIfComponent},
  { path: 'attribute-directives', component: AttributeDirectivesComponent },
  { path: 'inbuilt-pipes', component: InbuiltPipesComponent },
  { path: '**', component: PageNotFoundComponent },
];
