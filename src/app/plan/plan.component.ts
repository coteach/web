import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  @ViewChild('editor', { static: false }) editor: EditorComponent;

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  close() {
    this.location.back();
  }
}

