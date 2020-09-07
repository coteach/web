import { Component, OnInit, Input } from '@angular/core';
import { PlanListItem } from './plan-list-item';
@Component({
  selector: 'plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
  host: { class: "plan-list" },
})
export class PlanListComponent implements OnInit {
  @Input() dataSource: PlanListItem[] = [];

  constructor() { }

  ngOnInit(): void { }

  openLink(plan: PlanListItem): void {
    window.open(plan.link, '_blank');
  }
}