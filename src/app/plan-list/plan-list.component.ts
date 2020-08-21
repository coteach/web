import { Component, OnInit, Input } from '@angular/core';
import { Plan } from '../models/plan';
import { AppService } from '../app.service';

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

  ngOnInit(): void {
  }

  openPage(plan: Plan): void {
    window.open(plan.origin, '_blank');
  }

  hasStar(plan: Plan): boolean {
    return this.service.getStarList().includes(plan.id);
  }

  setStar(plan: Plan): void {
    if (this.hasStar(plan)) {
      this.service.deleteStar(plan.id);
    } else {
      this.service.postStar(plan.id);
    }
  }
}
