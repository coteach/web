import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewerComponent } from '../viewer/viewer.component';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../models/plan';
import { AppService } from '../app.service';

export declare type Params = {
  title: string;
};

@Component({
  selector: 'app-viewing-plan',
  templateUrl: './viewing-plan.component.html',
  styleUrls: ['./viewing-plan.component.scss']
})
export class ViewingPlanComponent implements OnInit {

  @ViewChild('viewer') viewer: ViewerComponent;

  constructor(
    private route: ActivatedRoute,
    private service: AppService,
  ) { }

  plan: Plan;

  ngOnInit(): void {
    let initPlan = (params: Params) =>
      this.service.getPlanByTitle(params.title).then(plan => this.plan = plan);

    this.route.params.subscribe(initPlan);
  }

}
