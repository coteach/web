import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-my-plan',
  templateUrl: './my-plan.component.html',
  styleUrls: ['./my-plan.component.scss']
})
export class MyPlanComponent implements OnInit {

  myPlans = [];

  ngOnInit(): void {
    // source : https://ed.arte.gov.tw/ch/content/m_design_list_1.aspx?PageNo=1
    this.myPlans = [
      "名畫失竊記",
      "色彩藝拼趣",
      "新『金』兵日記 色彩好好玩",
      "櫥窗裡的”衣”想世界",
      "詩與圖的對話",
      "彩繪心靈的畫布",
      "珍重再見",
      "畢卡索&立體派 ",
      "玩美無所不在－美的原理原則",
      "「有恆」為成功之本小書製作",
      "相信自己～愛唱歌的鳥",
      "河水變奏曲",
      "兩隻老虎狂想曲",
    ];
  }
}
