import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewerComponent } from '../viewer/viewer.component';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../models/plan';
import { StorageService } from '../storage.service';

export declare type Params = {
  plan: string;
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
    private storage: StorageService,
  ) { }

  plan: Plan = new Plan();

  ngOnInit(): void {
    var initPlan = (params: Params) =>
      this.plan = this.storage.getMyPlans().find(plan => plan.title == params.plan);

    this.route.params.subscribe(initPlan);
  }

}
