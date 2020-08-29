import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import * as Editor from '@toast-ui/editor';


enum PreviewStyle {
  Tab = "tab",
  Vertical = "vertical",
  Horizontal = "horizontal",
}

enum EditType {
  Markdown = "markdown",
  Wysiwyg = "wysiwyg",
}

enum ToobarItemNames {
  Heading = "heading",
  Bold = "bold",
  Italic = "italic",
  Strike = "strike",
  Divider = "divider",
  Hr = "hr",
  Quote = "quote",
  Ul = "ul",
  Ol = "ol",
  Task = "task",
  Indent = "indent",
  Outdent = "outdent",
  Table = "table",
  Image = "image",
  Link = "link",
  Code = "code",
  Codeblock = "codeblock",
}

function createLastButton(text: string) {
  const button = document.createElement('button');

  button.className = 'last';
  button.style.color = 'black';
  button.innerText = text;

  return button;
}

const defaultToolbarItems: (string | any)[] = [
  ToobarItemNames.Heading,
  ToobarItemNames.Bold,
  ToobarItemNames.Italic,
  ToobarItemNames.Strike,
  ToobarItemNames.Divider,
  ToobarItemNames.Hr,
  ToobarItemNames.Quote,
  ToobarItemNames.Divider,
  ToobarItemNames.Ul,
  ToobarItemNames.Ol,
  ToobarItemNames.Task,
  ToobarItemNames.Indent,
  ToobarItemNames.Outdent,
  ToobarItemNames.Divider,
  ToobarItemNames.Table,
  ToobarItemNames.Link,
  ToobarItemNames.Divider,
  ToobarItemNames.Code,
  ToobarItemNames.Codeblock,
  ToobarItemNames.Divider,
  {
    type: 'button',
    options: {
      el: createLastButton('公'),
      tooltip: '插入公式'
    }
  },
  {
    type: 'button',
    options: {
      el: createLastButton('流'),
      tooltip: '插入流程圖'
    }
  },
  {
    type: 'button',
    options: {
      el: createLastButton('課'),
      tooltip: '插入課綱核心素養'
    }
  },
  {
    type: 'button',
    options: {
      el: createLastButton('授'),
      tooltip: '插入授權方式'
    }
  }
];

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'editor',
  styleUrls: ['./editor.component.scss'],
  template: '<div class="toast-ui-editor"></div>',
})
export class EditorComponent implements OnInit {
  @Input() initialValue: string;

  _editor: Editor.default;

  ngOnInit() {
    var options = <Editor.EditorOptions>{
      el: document.querySelector('.toast-ui-editor'),
      height: "100%",
      initialEditType: EditType.Wysiwyg,
      toolbarItems: defaultToolbarItems,
      previewStyle: PreviewStyle.Vertical,
      hideModeSwitch: true,
    };

    this._editor = new Editor.default(options);
    this.setMarkdown(this.initialValue);
  }

  public addHook(type: string, handler: toastui.HandlerFunc): void {
    return this._editor.addHook(type, handler);
  }
  public addWidget(selection: Range, node: Node, style: string, offset?: number): void {
    return this._editor.addWidget(selection, node, style, offset);
  }
  public afterAddedCommand(): void {
    return this._editor.afterAddedCommand();
  }
  public blur(): void {
    return this._editor.blur();
  }
  public changeMode(mode: string, isWithoutFocus?: boolean): void {
    return this._editor.changeMode(mode, isWithoutFocus);
  }
  public changePreviewStyle(style: toastui.PreviewStyle): void {
    return this._editor.changePreviewStyle(style);
  }
  public exec(name: string, ...args: any[]): void {
    return this._editor.exec(name, args);
  }
  public focus(): void {
    return this._editor.focus();
  }
  public getCodeMirror(): import("codemirror").EditorFromTextArea {
    return this._editor.getCodeMirror();
  }
  public getCurrentModeEditor(): toastui.MarkdownEditor | toastui.WysiwygEditor {
    return this._editor.getCurrentModeEditor();
  }
  public getCurrentPreviewStyle(): toastui.PreviewStyle {
    return this._editor.getCurrentPreviewStyle();
  }
  public getHtml(): string {
    return this._editor.getHtml();
  }
  public getMarkdown(): string {
    return this._editor.getMarkdown();
  }
  public getRange(): Range | toastui.RangeType {
    return this._editor.getRange();
  }
  public getSelectedText(): string {
    return this._editor.getSelectedText();
  }
  public getSquire() {
    return this._editor.getSquire();
  }
  public getTextObject(range: Range | toastui.RangeType): toastui.MdTextObject | toastui.WwTextObject {
    return this._editor.getTextObject(range);
  }
  public getUI(): toastui.UI {
    return this._editor.getUI();
  }
  public getValue(): string {
    return this._editor.getValue();
  }
  public height(height: string): string {
    return this._editor.height(height);
  }
  public hide(): void {
    return this._editor.hide();
  }
  public insertText(text: string): void {
    return this._editor.insertText(text);
  }
  public isMarkdownMode(): boolean {
    return this._editor.isMarkdownMode();
  }
  public isViewer(): boolean {
    return this._editor.isViewer();
  }
  public isWysiwygMode(): boolean {
    return this._editor.isWysiwygMode();
  }
  public minHeight(minHeight: string): string {
    return this._editor.minHeight(minHeight);
  }
  public moveCursorToEnd(): void {
    return this._editor.moveCursorToEnd();
  }
  public moveCursorToStart(): void {
    return this._editor.moveCursorToStart();
  }
  public off(type: string): void {
    return this._editor.off(type);
  }
  public on(type: string, handler: toastui.HandlerFunc): void {
    return this._editor.on(type, handler);
  }
  public remove(): void {
    return this._editor.remove();
  }
  public removeHook(type: string): void {
    return this._editor.removeHook(type);
  }
  public reset(): void {
    return this._editor.reset();
  }
  public scrollTop(value: number): number {
    return this._editor.scrollTop(value);
  }
  public setHtml(html: string, cursorToEnd?: boolean): void {
    return this._editor.setHtml(html, cursorToEnd);
  }
  public setMarkdown(markdown: string, cursorToEnd?: boolean): void {
    return this._editor.setMarkdown(markdown, cursorToEnd);
  }
  public setUI(UI: toastui.UI): void {
    return this._editor.setUI(UI);
  }
  public setValue(value: string, cursorToEnd?: boolean): void {
    return this._editor.setValue(value, cursorToEnd);
  }
  public show(): void {
    return this._editor.show();
  }
  public setCodeBlockLanguages(languages?: string[]): void {
    return this._editor.setCodeBlockLanguages(languages);
  }
}