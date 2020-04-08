import { Component, OnInit } from "@angular/core";
import { Plan } from '../models/plan';
import { StorageService } from '../storage.service';

// source : https://ed.arte.gov.tw/ch/content/m_design_list_1.aspx?PageNo=1
const mockPlans = <Plan[]>[
  { title: "名畫失竊記", lastchangeAt: new Date('2020-03-08') },
  { title: "色彩藝拼趣", lastchangeAt: new Date('2020-03-08') },
  { title: "新『金』兵日記 色彩好好玩", lastchangeAt: new Date('2020-03-08') },
  { title: "櫥窗裡的”衣”想世界", lastchangeAt: new Date('2020-03-08') },
  { title: "詩與圖的對話", lastchangeAt: new Date('2020-03-08') },
  { title: "彩繪心靈的畫布", lastchangeAt: new Date('2020-03-08') },
  { title: "珍重再見", lastchangeAt: new Date('2020-03-08') },
  { title: "畢卡索&立體派", lastchangeAt: new Date('2020-03-08') },
  { title: "玩美無所不在－美的原理原則", lastchangeAt: new Date('2020-03-08') },
  { title: "「有恆」為成功之本小書製作", lastchangeAt: new Date('2020-03-08') },
  { title: "相信自己～愛唱歌的鳥", lastchangeAt: new Date('2020-03-08') },
  { title: "河水變奏曲", lastchangeAt: new Date('2020-03-08') },
  { title: "兩隻老虎狂想曲", lastchangeAt: new Date('2020-03-08') },
];

@Component({
  selector: 'app-my-plan',
  templateUrl: './my-plan.component.html',
  styleUrls: ['./my-plan.component.scss']
})
export class MyPlanComponent implements OnInit {
  constructor(private storage: StorageService) { }

  myPlans: Plan[];

  ngOnInit(): void {
    this.myPlans = this.storage.getPlans();

    if (this.storage.getPlans() == null) {
      this.storage.setPlans(mockPlans);
      this.myPlans = mockPlans;
    }
  }
}

