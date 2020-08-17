import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { MyPlansComponent } from './my-plans/my-plans.component';
import { PlanComponent } from './plan/plan.component';
import { Path } from './constant';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: ScaffoldComponent,
    children: [
      { path: '', redirectTo: Path.MyPlans, pathMatch: 'full' },
      { path: Path.Search, component: SearchComponent },
      { path: Path.MyPlans, component: MyPlansComponent },
    ]
  },
  { path: Path.Plan, component: PlanComponent },
  { path: '**', redirectTo: Path.MyPlans },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }