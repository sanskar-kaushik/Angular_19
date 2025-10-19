import { Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StructuralDirectiveNgIfVsIfComponent } from './Components/structural-directive-ng-if-vs-if/structural-directive-ng-if-vs-if.component';
import { AttributeDirectivesComponent } from './Components/attribute-directives/attribute-directives.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { InbuiltPipesComponent } from './Components/inbuilt-pipes/inbuilt-pipes.component';
import { TemplateDrivenFormComponent } from './Components/template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CrudComponent } from './Components/crud/crud.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { ViewUserComponent } from './Components/view-user/view-user.component';
import { ResourceApiComponent } from './Components/resource-api/resource-api.component';

export const routes: Routes = [
  { path: '' , redirectTo: "user" , pathMatch:"full"},
  { path: 'user', component: UserComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'resource_rxresource', component: ResourceApiComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'updateUser/:id', component: UpdateUserComponent },
  { path: 'viewUser/:id', component: ViewUserComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'structural-directives', component: StructuralDirectiveNgIfVsIfComponent},
  { path: 'attribute-directives', component: AttributeDirectivesComponent },
  { path: 'pipes', component: InbuiltPipesComponent },
  { path: 'tdf', component: TemplateDrivenFormComponent },
  { path: 'rf', component: ReactiveFormsComponent },
  { path: '**', component: PageNotFoundComponent },
];
