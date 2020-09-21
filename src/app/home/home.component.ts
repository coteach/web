import { Component, OnInit } from '@angular/core';

interface Tag {
  name: string;
  color: string;
}

const TagNames: string[] = ["國小", "國中", "高中", "1年級", "2年級", "3年級", "4年級", "5年級", "6年級", "7年級", "8年級",
  "9年級", "10年級", "11年級", "12年級", "國語文", "英語文", "本土語文", "數學", "自然科學", "生物", "理化", "物理", "化學", "地科",
  "生活課程", "社會", "歷史", "地理", "公民", "資訊科技", "生活科技", "藝術", "全民國防教育", "班級經營",];

const Colors: string[] = ["red", "orange", "green", "purple", "black"];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  tags: Tag[];

  ngOnInit(): void {
    let tages = TagNames.map((name, index) => <Tag>{
      name: name,
      color: Colors[index % Colors.length],
    });

    this.tags = tages.sort(() => 0.5 - Math.random());
  }
}
