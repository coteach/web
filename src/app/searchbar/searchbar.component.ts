import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  host: { class: "searchbar" },
})
export class SearchbarComponent implements OnInit {
  @Input() keyword: string = "";
  @Output() keywordChange = new EventEmitter<string>();

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitKeyword(): void {
    this.keywordChange.emit(this.keyword);
  }

  emitSearch(): void {
    this.emitKeyword();
    this.search.emit(this.keyword);
  }
}
