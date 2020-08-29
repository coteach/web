import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import * as Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'viewer',
  template: '<div class="toast-ui-viewer"></div>',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  @Input() initialValue: string;

  private viewer: Viewer.default;

  constructor() { }

  ngOnInit(): void {
    var options = <Viewer.ViewerOptions>{
      el: document.querySelector('.toast-ui-viewer'),
      height: "100%",
    };

    this.viewer = new Viewer.default(options);
    this.viewer.setMarkdown(this.initialValue);
  }
}
