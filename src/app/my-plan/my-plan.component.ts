import { Component, OnInit } from "@angular/core";
import { Plan } from '../models/plan';
import { StorageService } from '../storage.service';
import { AppService } from '../app.service';
import { RouterLink } from '../constant';

// source : https://ed.arte.gov.tw/ch/content/m_design_list_1.aspx?PageNo=1
const mockPlans = <Plan[]>[
  { id: "1", title: "名畫失竊記", lastchangeAt: new Date('2020-03-08') },
  { id: "2", title: "色彩藝拼趣", lastchangeAt: new Date('2020-03-08') },
  { id: "3", title: "新『金』兵日記 色彩好好玩", lastchangeAt: new Date('2020-03-08') },
  { id: "4", title: "櫥窗裡的”衣”想世界", lastchangeAt: new Date('2020-03-08') },
  { id: "5", title: "詩與圖的對話", lastchangeAt: new Date('2020-03-08') },
  { id: "6", title: "彩繪心靈的畫布", lastchangeAt: new Date('2020-03-08') },
  { id: "7", title: "珍重再見", lastchangeAt: new Date('2020-03-08') },
  { id: "8", title: "畢卡索&立體派", lastchangeAt: new Date('2020-03-08') },
  { id: "9", title: "玩美無所不在－美的原理原則", lastchangeAt: new Date('2020-03-08') },
  { id: "10", title: "「有恆」為成功之本小書製作", lastchangeAt: new Date('2020-03-08') },
  { id: "11", title: "相信自己～愛唱歌的鳥", lastchangeAt: new Date('2020-03-08') },
  { id: "12", title: "河水變奏曲", lastchangeAt: new Date('2020-03-08') },
  { id: "13", title: "兩隻老虎狂想曲", lastchangeAt: new Date('2020-03-08') },
];

@Component({
  selector: 'app-my-plan',
  templateUrl: './my-plan.component.html',
  styleUrls: ['./my-plan.component.scss']
})
export class MyPlanComponent implements OnInit {
  constructor(private storage: StorageService
  ) { }

  routerLink = RouterLink;
  myPlans: Plan[];

  ngOnInit(): void {
    this.myPlans = this.storage.getPlans();

    if (this.storage.getPlans().length == 0) {
      this.storage.setPlans(mockPlans);
      this.myPlans = mockPlans;
    }

    this.myPlans.sort((a, b) => b.lastchangeAt.getTime() - a.lastchangeAt.getTime());
  }

  deletePlan(id: string): void {
    this.myPlans = this.myPlans.filter(value => value.id != id);
    this.storage.setPlans(this.myPlans);
  }
}

