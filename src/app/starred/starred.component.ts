import { Component, OnInit } from '@angular/core';
import { Plan } from '../models/plan';
import { AppService } from '../app.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss']
})
export class StarredComponent implements OnInit {
  constructor(
    private service: AppService,
  ) { }

  plans: Plan[];

  ngOnInit(): void {
    this.service.getStarred().then(plans => this.plans = plans);
  }
}

