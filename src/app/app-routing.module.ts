import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { MyPlanComponent } from './my-plan/my-plan.component';

const myPlan = 'my-plan';

const routes: Routes = [
  {
    path: '',
    component: ScaffoldComponent,
    children: [
      { path: '', redirectTo: myPlan, pathMatch: 'full' },
      { path: myPlan, component: MyPlanComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export class Urls {
  static myPlan = `/${myPlan}`;
}