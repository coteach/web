import { Component, OnInit } from "@angular/core";
import { Plan } from '../models/plan';
import { AppService } from '../app.service';
import { RouterLink } from '../constant';

@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.component.html',
  styleUrls: ['./my-plans.component.scss']
})
export class MyPlansComponent implements OnInit {
  constructor(
    private service: AppService,
  ) { }

  routerLink = RouterLink;
  plans: Plan[];

  ngOnInit(): void {
    this.service.getMyPlans().then(plans => {
      this.plans = plans;
      this.plans.sort((a, b) => b.lastchangeAt.getTime() - a.lastchangeAt.getTime());
    });
  }
}

