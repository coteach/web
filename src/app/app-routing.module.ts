import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { MyPlanComponent } from './my-plan/my-plan.component';
import { PlanComponent } from './plan/plan.component';
import { Path } from './constant';

const routes: Routes = [
  {
    path: '',
    component: ScaffoldComponent,
    children: [
      { path: '', redirectTo: Path.MyPlan, pathMatch: 'full' },
      { path: Path.MyPlan, component: MyPlanComponent },
    ]
  },
  { path: Path.Plan, component: PlanComponent },
  { path: '**', redirectTo: Path.MyPlan },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }