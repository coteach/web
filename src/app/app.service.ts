import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Plan } from './models/plan';
import { StorageService } from './storage.service';
import { CrawlService } from './crawl.service';

const mockMyId = "user001";

// source : https://ed.arte.gov.tw/ch/content/m_design_list_1.aspx?PageNo=1
const mockPlans = <Plan[]>[
  {
    userId: mockMyId, id: "template1", title: "搜尋演算法教案", lastchangeAt: new Date('2020-03-08'), content:
      `# 搜尋演算法教案範例
  
  | 單元名稱 | 搜尋演算法 | 教學設計者 |Mengting |
  | -------- | -------- | -------- |-------- |
  | 教學對象 | 高中一年級     | 教學時間     | 50 分鐘 |
  | 總綱核心素養 面向及項目 | 面向: A 自主行動 <br> 項目: A2 系統思考與解決問題    | 資訊科技核 心素養具體 內涵    |科 S-U-A2: 運用科技工具與策略進行 系統思考與分析探索,並 有效解決問題。 |
  
  | 關鍵字 | 演算法、搜尋、線性搜尋(Linear Search)、二元搜尋(Binary Search) | 
  | -------- | -------- |
  | 學習表現 | 運 t-IV-4 能應用運算思維解析問題。| 
  | 學習內容 | 資 A-V-2 重要演算法的概念與應用。 | 
  | 學習目標 | 學生能了解搜尋演算法存在的意義，學習兩種搜尋演算法的適用時機及其 運作方式，且能舉出相應的生活實例。 | 
  | 學生先備知識與 技能 | 具備基本程式邏輯概念有助於理解上課內容。具備基本程式邏輯概念有助於理解上課內容。 | 
  
  教學活動步驟
  
  
  | 課程內容 | 備註|
  |---|---|
  | 由排序進入到搜尋，並說明安排此教學順序的理由，是 因為多數情況下經排序後能有較好的搜尋效率。 例外情形比擬: 紊亂的個人房間經他人之手整理後，反 而不利於自己尋找物品。<br><br>搜尋演算法<br>1. 引起動機，討論學習此章節之用意。 當電腦要存取使用者指定的資訊時，必須要在短時間內 從大量的資訊中完成篩選。<br> 2. 舉搜尋引擎為例，展示其資料搜索之快速。<br> 3. 帶入實際案例，介紹搜尋演算法，也為之後的「線性 搜尋法」鋪陳。 引導同學思考若想從一疊散亂的撲克牌當中，找出所指 定的目標牌，應該運用何種方式。而這種「方式」即 「搜尋演算法」。 <br> 問答: 如何在一疊散亂的撲克牌中，找出指定目標牌? <br>4. 為搜尋演算法做更明確的定義。 在特定情境之下，尋找指定物品時，一種特定不變的找 尋方法。 問答:將此定義套用到搜尋指定撲克牌時，「情境」、 「指定物品」、「找尋方法」分別為何?            | 3. 從第一張開始看，不 是的話就換下一張，直到 找到為止。<br><br> 4. 情境:一副打散的牌; 指定物品:紅心A; 找尋 方法:從第一張開始看， 不是的話就跳到下一張。     |
  | 線性搜尋法(Linear Search)<br>5. 介紹線性搜尋法。 點出前述所提及的撲克牌尋找方式，即為線性搜尋法的 展現。 尋找方式:從第一張開始看，若非所求目標就跳到下一 張，直到找到為止。當從頭到尾看過一遍，仍未找到目 標，方能確認目標不在搜索範圍當中。<br> 6. 繪圖展示在陣列中使線性搜尋法尋找指定數字的過 程。 補充說明學習單的設計發想。雖題目的範例資料規模 小，用肉眼即可判斷結果而不需逐步推演，但是當遇到 大量資料就難以達成，因此是為模擬真實搜尋之情境。<br>7. 總結此搜尋法之特性。 適用於隨機排列、總體個數少、沒有要常常在當中搜尋 的資料，並強調其不便性，帶入下一種搜尋法的介紹。<br>8. 線性搜尋法小故事 潛水鐘與蝴蝶的作者因故癱瘓，僅剩單邊眼睛可眨，因 此在他人協助下，憑藉頻率字母表與眨眼確認，完成了 此著作，也是線性搜尋法之展現。<br> 9. Python 程式實作 http://bit.ly/linear_1206 | 6. best case: O(1) worst case: O(n)   |
  |二元搜尋法(Binary Search)<br>10.先以遊戲體會二元搜尋法概念，而不直接切入原理解說。<br>問答:想想遊戲背後的原理。<br>11. 解析遊戲背後的原理。 透過不斷減半，將結果收斂。<br>12. 介紹二元搜尋法。 在資料已排序的情形下，不斷詢問相同問題，將搜尋對象一再減半。並引入分治法(Divide and Conquer)概念。<br>13. 演算法流程之介紹。繪圖展示在陣列中使用 Binary Search 尋找指定數字的過程。驗證 O(log(n)) 之因。|10. 因部分同學之前都有 在課堂中玩過，因此這次 就用口頭解說回顧遊戲。<br>11. 100,0000/(2^20) 約 等於1，展現其範圍收斂 速度之快。<br>12. 與生活經驗連結—— 猜數字遊戲。<br>13. 學習單 若時間足夠，分別展示 「指定數字有/沒有在陣列中」的兩種情形。|
  |結語總複習<br>14. 帶領同學回顧今日課堂內容。<br>(1) 線性搜尋法(Linear Search): 不需排序，最簡單，依 序一次檢查一個元素。速度慢。<br>(2) 二元搜尋法(Binary Search): 需排序，一再使用相同 方式搜尋。先檢查中間元素，再決定要往前半部或後半部搜尋。速度快。||
  
  |評量方法|學生能了解搜尋演算法於生活中的應用，並能完成學習單上的步驟推演後，以 Python 實作解決問題。|
  |---|---|
  |教學活動資源|Akinator 神燈精靈遊戲:https://en.akinator.com|
  |教學設備|電腦教室、筆|
  `
  },
  { userId: "user002", id: "1", title: "名畫失竊記", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "2", title: "色彩藝拼趣", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "3", title: "新『金』兵日記 色彩好好玩", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "4", title: "櫥窗裡的”衣”想世界", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "5", title: "詩與圖的對話", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "6", title: "彩繪心靈的畫布", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "7", title: "珍重再見", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "8", title: "畢卡索&立體派", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "9", title: "玩美無所不在－美的原理原則", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "10", title: "「有恆」為成功之本小書製作", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "11", title: "相信自己～愛唱歌的鳥", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "12", title: "河水變奏曲", lastchangeAt: new Date('2020-03-08') },
  { userId: "user002", id: "13", title: "兩隻老虎狂想曲", lastchangeAt: new Date('2020-03-08') },
];

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private httpClient: HttpClient,
    private storage: StorageService,
    private crawlService: CrawlService,
  ) {
    this.initialized = this.initStorage();
  }

  private initialized: Promise<void>;

  private get plansAsync(): Promise<Plan[]> {
    return this.initialized.then(() => this.storage.getPlans());
  };

  private get myPlansAsync(): Promise<Plan[]> {
    return this.plansAsync.then(plans => plans.filter(plan => plan.userId == mockMyId));
  }

  private initStorage(): Promise<void> {
    let initExternalPlnas = (): Promise<string> => new Promise(resolve => {
      let result;
      if (this.storage.getExternalPlans().length == 0) {
        result = this.crawlService.getData().then(plans => this.storage.setExternalPlans(plans));
      }

      resolve(result);
    });

    let initPlnas = (): void => {
      if (this.storage.getPlans().length == 0) {
        let externalPlans = this.storage.getExternalPlans();
        let plans = mockPlans.concat(externalPlans);
        this.storage.setPlans(plans);
      }
    };

    return initExternalPlnas().then(initPlnas);
  }

  getMyId(): string {
    return mockMyId;
  }

  async getNew(): Promise<string> {
    let untitledPlan = new Plan({
      id: Math.random().toString(16).slice(2),
      userId: mockMyId,
      title: "Untitled",
      lastchangeAt: new Date(),
    });

    let plans = await this.plansAsync;
    plans.push(untitledPlan);
    this.storage.setPlans(plans);

    return untitledPlan.id;
  }

  async getStarred(): Promise<Plan[]> {
    return this.plansAsync.then(plans => plans.filter(plan => plan.starred));
  }

  getMyPlans(): Promise<Plan[]> {
    return this.myPlansAsync;
  }

  async deleteMyPlan(id: string): Promise<void> {
    let plans = (await this.plansAsync).filter(value => value.id != id);

    this.storage.setPlans(plans);
  }

  getPlan(id: string): Promise<Plan> {
    return this.plansAsync.then(plans => plans.find(p => p.id == id));
  }

  getPlanByTitle(title: string): Promise<Plan> {
    return this.plansAsync.then(plans => plans.find(p => p.title == title));
  }

  async putPlan(plan: Plan): Promise<void> {
    let plans = (await this.plansAsync).filter(value => value.id != plan.id);
    plans.push(plan);
    this.storage.setPlans(plans);
  }

  searchPlan(keyword: string): Promise<Plan[]> {
    const keywords = keyword.split(" ").filter(text => text != "");
    let includeKeywords = (plan: Plan) => keywords.every(keyword =>
      plan.title.includes(keyword) || plan.formats?.includes(keyword)
    );

    return this.plansAsync.then(plans => plans.filter(includeKeywords));
  }
}
