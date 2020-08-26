import { Component, OnInit, Input } from '@angular/core';
import { Plan } from '../models/plan';
import { AppService } from '../app.service';
import { RouterLink } from '../constant';
import { Router } from '@angular/router';

@Component({
  selector: 'plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {
  @Input() dataSource: Plan[];

  constructor(
    private service: AppService,
    private router: Router,
  ) { }

  myId: string;
  routerLink = RouterLink;

  ngOnInit(): void {
    this.myId = this.service.getMyId();
  }

  openPage(plan: Plan): void {
    window.open(plan.origin, '_blank');
  }

  canEdit(plan: Plan): boolean {
    return this.canDelete(plan);
  }

  canDelete(plan: Plan): boolean {
    return this.myId == plan.userId;
  }

  canFork(plan: Plan): boolean {
    return this.myId != plan.userId && !plan.isExternal;
  }

  setStar(plan: Plan): void {
    plan.starred = !plan.starred;
    this.service.putPlan(plan);
  }

  deletePlan(plan: Plan): void {
    this.dataSource = this.dataSource.filter(value => value.id != plan.id);
    this.service.deleteMyPlan(plan.id);
  }

  async forkPlan(source: Plan): Promise<void> {
    let plan = Plan.from(source);
    plan.id = await this.service.getNew();
    plan.userId = this.myId;

    this.service.putPlan(plan);
    this.router.navigate([RouterLink.EditingPlan, plan.id]);
  }
}
