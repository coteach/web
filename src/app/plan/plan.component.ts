import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { EditorComponent } from '../editor/editor.component';
import { StorageService } from '../storage.service';
import { Plan } from '../models/plan';
import { ActivatedRoute } from '@angular/router';

export declare type Params = {
  id: string;
};

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private storage: StorageService,
  ) { }

  @ViewChild('editor') editor: EditorComponent;

  plan: Plan = new Plan();

  ngOnInit(): void {
    var initPlan = (params: Params) => {
      this.plan = this.storage.getMyPlans().find(plan => plan.id == params.id);

      if (this.plan == null) {
        this.plan = new Plan({
          id: params.id,
          title: "Untitled",
          lastchangeAt: new Date(),
        });
      }
    }

    this.route.params.subscribe(initPlan);
  }

  ngAfterViewInit(): void {
    this.editor.focus()
  }

  @HostListener('window:beforeunload')
  save(): void {
    this.plan.content = this.editor.getMarkdown();
    this.plan.lastchangeAt = new Date();

    var plans = this.storage.getMyPlans().filter(value => value.id != this.plan.id);

    plans.push(this.plan);
    this.storage.setMyPlans(plans);

    this.location.back();
  }
}

