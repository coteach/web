import { Component, OnInit } from '@angular/core';
import { Plan } from '../models/plan';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(
    private service: AppService,
    private route: ActivatedRoute,
  ) { }

  plans: Plan[];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const keyword = params["q"];

      this.service.searchPlan(keyword).then(plans => this.plans = plans);
    });
  }
}
