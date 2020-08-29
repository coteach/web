import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { EditorComponent } from '../editor/editor.component';
import { Plan } from '../models/plan';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { RouterLink } from '../constant';
import { Pipe, PipeTransform } from '@angular/core';

export declare type Params = {
  id: string;
};

@Component({
  selector: 'app-editing-plan',
  templateUrl: './editing-plan.component.html',
  styleUrls: ['./editing-plan.component.scss']
})
export class EditingPlanComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: AppService,
  ) { }

  @ViewChild('editor') editor: EditorComponent;

  plan: Plan = new Plan();
  message: string;
  messages: string[] = [
    "嘉豪： 要參加 Demo day 嗎",
    "張振： Go~Go~",
    "孟庭： 我也可以參加"
  ];

  ngOnInit(): void {
    let initPlan = (params: Params) =>
      this.service.getPlan(params.id).then(plan => this.plan = plan).then(plan => this.editor.setMarkdown(plan.content));

    this.route.params.subscribe(initPlan);
  }

  ngAfterViewInit(): void {
    this.editor.focus()
  }

  @HostListener('window:beforeunload')
  save(): void {
    this.plan.content = this.editor.getMarkdown();
    this.plan.lastchangeAt = new Date();

    this.service.putPlan(this.plan);

    this.router.navigate([RouterLink.MyPlans]);
  }

  talk(): void {
    this.messages.push("孟庭： " + this.message);
    this.message = "";
  }
}

