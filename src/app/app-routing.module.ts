import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { MyPlansComponent } from './my-plans/my-plans.component';
import { Path } from './constant';
import { SearchComponent } from './search/search.component';
import { StarredComponent } from './starred/starred.component';
import { EditingPlanComponent } from './editing-plan/editing-plan.component';
import { ViewingPlanComponent } from './viewing-plan/viewing-plan.component';

const routes: Routes = [
  {
    path: '',
    component: ScaffoldComponent,
    children: [
      { path: '', redirectTo: Path.MyPlans, pathMatch: 'full' },
      { path: Path.Search, component: SearchComponent },
      { path: Path.MyPlans, component: MyPlansComponent },
      { path: Path.Starred, component: StarredComponent },
    ]
  },
  { path: Path.EditingPlan, component: EditingPlanComponent },
  { path: Path.ViewingPlan, component: ViewingPlanComponent },
  { path: '**', redirectTo: Path.MyPlans },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }