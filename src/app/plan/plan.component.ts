import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { EditorComponent } from '../editor/editor.component';
import { StorageService } from '../storage.service';
import { Plan } from '../models/plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  constructor(
    private location: Location,
    private storage: StorageService,
  ) { }

  @ViewChild('editor', { static: false }) editor: EditorComponent;

  title: string = "Untitled";

  get plan(): Plan {
    var result = new Plan();
    result.content = this.editor.getMarkdown();
    result.lastchangeAt = new Date();
    result.title = this.title;

    return result;
  }

  ngOnInit() { }

  close() {
    this.location.back();
  }

  save() {
    var plans = this.storage.getPlans();
    plans.push(this.plan);
    console.log(plans);
    this.storage.setPlans(plans);

    this.close();
  }
}

