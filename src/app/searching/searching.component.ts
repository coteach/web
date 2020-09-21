import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanListItem } from '../plan-list/plan-list-item';
import { ApiService } from '../services/api/api.service';
import { PlanOrigin } from '../services/api/plan-origin';
import { Plan } from '../services/api/plan';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
  ) { }

  planList: PlanListItem[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const keyword = params["q"] + "";

      Promise.all([
        this.service.searchPlan(keyword),
        this.service.getPlanOrigins(),
      ])
        .then(([plans, origins]) => plans.map(plan => this.newPlanListItem(plan, origins)))
        .then(plans => this.planList = plans);
    });
  }

  private newPlanListItem(plan: Plan, origins: PlanOrigin[]): PlanListItem {
    const origin = origins.find(origin => origin.id == plan.originId);

    return <PlanListItem>{
      metaImg: origin.logo,
      metaText: origin.name,
      title: plan.title,
      link: plan.page,
    };
  }
}
