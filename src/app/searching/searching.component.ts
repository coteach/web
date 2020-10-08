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
  loading = true;

  get notLoading(): boolean {
    return !this.loading
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const keyword = params["q"] + "";

      if (keyword == "") return;

      this.setLoading();
      Promise.all([
        this.service.searchPlan(keyword),
        this.service.getPlanOrigins(),
      ])
        .then(this.mapPlanListItems)
        .then(items => this.setPlanList(items).setNotLoading());
    });
  }

  mapPlanListItems([plans, origins]: [Plan[], PlanOrigin[]]): PlanListItem[] {
    let newPlanListItem = (plan: Plan, origins: PlanOrigin[]) => {
      const origin = origins.find(origin => origin.id == plan.originId);

      return <PlanListItem>{
        metaImg: origin.logo,
        metaText: origin.name,
        title: plan.title,
        link: plan.page,
      };
    }

    return plans.map(plan => newPlanListItem(plan, origins));
  }

  setLoading(value = true): SearchingComponent {
    this.loading = value;
    return this;
  }

  setNotLoading(value = true): SearchingComponent {
    this.setLoading(!value);
    return this;
  }

  setPlanList(value: PlanListItem[]): SearchingComponent {
    this.planList = value;
    return this;
  }
}
