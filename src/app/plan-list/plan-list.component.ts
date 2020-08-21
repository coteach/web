import { Component, OnInit, Input } from '@angular/core';
import { Plan } from '../models/plan';
import { AppService } from '../app.service';
import { RouterLink } from '../constant';

@Component({
  selector: 'plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {
  @Input() dataSource: Plan[];

  constructor(
    private service: AppService,
  ) { }

  routerLink = RouterLink;

  ngOnInit(): void {
  }

  openPage(plan: Plan): void {
    window.open(plan.origin, '_blank');
  }

  isStarred(plan: Plan): boolean {
    return this.service.getStarredIds().includes(plan.id);
  }

  setStar(plan: Plan): void {
    if (this.isStarred(plan)) {
      this.service.deleteStarredId(plan.id);
    } else {
      this.service.postStarredId(plan.id);
    }
  }

  deletePlan(plan: Plan): void {
    this.dataSource = this.dataSource.filter(value => value.id != plan.id);
    this.service.deleteMyPlan(plan.id);
  }
}
