import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { MyPlanComponent } from './my-plan/my-plan.component';
import { PlanComponent } from './plan/plan.component';

const myPlan = 'my-plan';
const plan = 'plan';

const routes: Routes = [
  {
    path: '',
    component: ScaffoldComponent,
    children: [
      { path: '', redirectTo: myPlan, pathMatch: 'full' },
      { path: myPlan, component: MyPlanComponent },
    ]
  },
  { path: plan, component: PlanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export class Urls {
  static myPlan = `/${myPlan}`;
  static plan = `/${plan}`;
}