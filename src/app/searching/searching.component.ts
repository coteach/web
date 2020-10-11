import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanListItem } from '../plan-list/plan-list-item';
import { ApiService } from '../services/api/api.service';
import { PlanOrigin } from '../services/api/plan-origin';
import { Plan } from '../services/api/plan';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private snackBar: MatSnackBar
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
        .then(items => this.setPlanList(items))
        .catch(this.handleError)
        .finally(() => this.setNotLoading());
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

  handleError(response: HttpErrorResponse) {
    let message: string;
    switch (response.status) {
      case 0: {
        message = "沒有網路連線";
        break;
      }
      case 503: {
        message = "臨時的伺服器過載，伺服器當前無法處理請求。"
        break;
      }
      default: {
        message = "伺服器錯誤";
        break;
      }
    }

    this.openSnackBar(message);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
    });
  }
}
