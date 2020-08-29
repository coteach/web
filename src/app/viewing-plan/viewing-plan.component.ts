import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewerComponent } from '../viewer/viewer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../models/plan';
import { AppService } from '../app.service';
import { RouterLink } from '../constant';

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
    private router: Router,
  ) { }

  myId: string;
  plan: Plan;
  routerLink = RouterLink;

  ngOnInit(): void {
    this.myId = this.service.getMyId();

    let initPlan = (params: Params) =>
      this.service.getPlanByTitle(params.title).then(plan => this.plan = plan);

    this.route.params.subscribe(initPlan);
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  canEdit(plan: Plan): boolean {
    return this.myId == plan.userId;
  }

  canFork(plan: Plan): boolean {
    return this.myId != plan.userId && !plan.isExternal;
  }

  setStar(plan: Plan): void {
    plan.starred = !plan.starred;
    this.service.putPlan(plan);
  }

  async downloadPlan(): Promise<void> {
    let file = new Blob([this.plan.content], { type: 'application/pdf' });
    let url = URL.createObjectURL(file);

    let anchor = document.createElement("a");
    anchor.download = this.plan.title;
    anchor.href = url;

    document.body.appendChild(anchor);
    anchor.click();

    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(url);
  }

  async forkPlan(source: Plan): Promise<void> {
    let plan = Plan.from(source);
    plan.id = await this.service.getNew();
    plan.userId = this.myId;
    plan.title = plan.title + " - copy";

    this.service.putPlan(plan);
    this.router.navigate([RouterLink.EditingPlan, plan.id]);
  }
}
