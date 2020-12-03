import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor() { }

  links = [
    {title: '教育創新與另類教育討論', url: 'https://www.facebook.com/groups/educationinnovation/' },
    {title:'瑩光教育讀書會',url:'https://www.facebook.com/groups/551317922040666/'},
    {title:'均一教育後援會',url:'https://www.facebook.com/groups/junyiacademy/'},
    {title:'公民教學社群',url:'https://www.facebook.com/groups/264913330343248/'},
    {title: '學思達教學社群', url: 'https://www.facebook.com/groups/780188175346334/' },
  ]

  ngOnInit(): void {
  }

}
