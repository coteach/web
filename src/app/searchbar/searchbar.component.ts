import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  host: { class: "searchbar" },
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
