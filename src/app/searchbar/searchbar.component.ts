import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "searchbar",
  }
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
