import { Component, OnInit, HostListener } from '@angular/core';
import { ExtenalPlan } from '../models/external-plan';

const MOCK_PLANS: ExtenalPlan[] = [
  { name: '句型遊戲：間接問句簡化 where I can go --> where to go', link: 'https://www.shareclass.org/course/94874f398d2040868701156e38ed5e95/', tags: '＃1年級 #英語文 #句型 #文法', formats: 'PDF | docx' },
  { name: '地圖判讀與地理資訊', link: 'https://www.shareclass.org/course/c760aa0657e74f13be7e4b8b1a851b8c/', tags: '＃10年級 #地理 #地理概說和地圖 #地理 #地理資訊和地形', formats: 'docx' },
  { name: '劉姥姥進大觀園', link: 'https://www.shareclass.org/course/60867e95bb2f487782dffcfe9c65f1e7/', tags: '#10年級 #11年級 #12年 #國語文 #清', formats: 'pdf' },
  { name: '句型遊戲：間接問句簡化 where I can go --> where to go', link: 'https://www.shareclass.org/course/94874f398d2040868701156e38ed5e95/', tags: '＃1年級 #英語文 #句型 #文法', formats: 'PDF | docx' },
  { name: '地圖判讀與地理資訊', link: 'https://www.shareclass.org/course/c760aa0657e74f13be7e4b8b1a851b8c/', tags: '＃10年級 #地理 #地理概說和地圖 #地理 #地理資訊和地形', formats: 'docx' },
  { name: '劉姥姥進大觀園', link: 'https://www.shareclass.org/course/60867e95bb2f487782dffcfe9c65f1e7/', tags: '#10年級 #11年級 #12年 #國語文 #清', formats: 'pdf' },
  { name: '句型遊戲：間接問句簡化 where I can go --> where to go', link: 'https://www.shareclass.org/course/94874f398d2040868701156e38ed5e95/', tags: '＃1年級 #英語文 #句型 #文法', formats: 'PDF | docx' },
  { name: '地圖判讀與地理資訊', link: 'https://www.shareclass.org/course/c760aa0657e74f13be7e4b8b1a851b8c/', tags: '＃10年級 #地理 #地理概說和地圖 #地理 #地理資訊和地形', formats: 'docx' },
  { name: '劉姥姥進大觀園', link: 'https://www.shareclass.org/course/60867e95bb2f487782dffcfe9c65f1e7/', tags: '#10年級 #11年級 #12年 #國語文 #清', formats: 'pdf' },
  { name: '句型遊戲：間接問句簡化 where I can go --> where to go', link: 'https://www.shareclass.org/course/94874f398d2040868701156e38ed5e95/', tags: '＃1年級 #英語文 #句型 #文法', formats: 'PDF | docx' },
  { name: '地圖判讀與地理資訊', link: 'https://www.shareclass.org/course/c760aa0657e74f13be7e4b8b1a851b8c/', tags: '＃10年級 #地理 #地理概說和地圖 #地理 #地理資訊和地形', formats: 'docx' },
  { name: '劉姥姥進大觀園', link: 'https://www.shareclass.org/course/60867e95bb2f487782dffcfe9c65f1e7/', tags: '#10年級 #11年級 #12年 #國語文 #清', formats: 'pdf' },
  { name: '句型遊戲：間接問句簡化 where I can go --> where to go', link: 'https://www.shareclass.org/course/94874f398d2040868701156e38ed5e95/', tags: '＃1年級 #英語文 #句型 #文法', formats: 'PDF | docx' },
  { name: '地圖判讀與地理資訊', link: 'https://www.shareclass.org/course/c760aa0657e74f13be7e4b8b1a851b8c/', tags: '＃10年級 #地理 #地理概說和地圖 #地理 #地理資訊和地形', formats: 'docx' },
  { name: '劉姥姥進大觀園', link: 'https://www.shareclass.org/course/60867e95bb2f487782dffcfe9c65f1e7/', tags: '#10年級 #11年級 #12年 #國語文 #清', formats: 'pdf' },
  { name: '句型遊戲：間接問句簡化 where I can go --> where to go', link: 'https://www.shareclass.org/course/94874f398d2040868701156e38ed5e95/', tags: '＃1年級 #英語文 #句型 #文法', formats: 'PDF | docx' },
  { name: '地圖判讀與地理資訊', link: 'https://www.shareclass.org/course/c760aa0657e74f13be7e4b8b1a851b8c/', tags: '＃10年級 #地理 #地理概說和地圖 #地理 #地理資訊和地形', formats: 'docx' },
  { name: '劉姥姥進大觀園', link: 'https://www.shareclass.org/course/60867e95bb2f487782dffcfe9c65f1e7/', tags: '#10年級 #11年級 #12年 #國語文 #清', formats: 'pdf' },
  { name: '句型遊戲：間接問句簡化 where I can go --> where to go', link: 'https://www.shareclass.org/course/94874f398d2040868701156e38ed5e95/', tags: '＃1年級 #英語文 #句型 #文法', formats: 'PDF | docx' },
  { name: '地圖判讀與地理資訊', link: 'https://www.shareclass.org/course/c760aa0657e74f13be7e4b8b1a851b8c/', tags: '＃10年級 #地理 #地理概說和地圖 #地理 #地理資訊和地形', formats: 'docx' },
  { name: '劉姥姥進大觀園', link: 'https://www.shareclass.org/course/60867e95bb2f487782dffcfe9c65f1e7/', tags: '#10年級 #11年級 #12年 #國語文 #清', formats: 'pdf' },
  { name: '句型遊戲：間接問句簡化 where I can go --> where to go', link: 'https://www.shareclass.org/course/94874f398d2040868701156e38ed5e95/', tags: '＃1年級 #英語文 #句型 #文法', formats: 'PDF | docx' },
  { name: '地圖判讀與地理資訊', link: 'https://www.shareclass.org/course/c760aa0657e74f13be7e4b8b1a851b8c/', tags: '＃10年級 #地理 #地理概說和地圖 #地理 #地理資訊和地形', formats: 'docx' },
  { name: '劉姥姥進大觀園', link: 'https://www.shareclass.org/course/60867e95bb2f487782dffcfe9c65f1e7/', tags: '#10年級 #11年級 #12年 #國語文 #清', formats: 'pdf' },
  { name: '句型遊戲：間接問句簡化 where I can go --> where to go', link: 'https://www.shareclass.org/course/94874f398d2040868701156e38ed5e95/', tags: '＃1年級 #英語文 #句型 #文法', formats: 'PDF | docx' },
  { name: '地圖判讀與地理資訊', link: 'https://www.shareclass.org/course/c760aa0657e74f13be7e4b8b1a851b8c/', tags: '＃10年級 #地理 #地理概說和地圖 #地理 #地理資訊和地形', formats: 'docx' },
  { name: '劉姥姥進大觀園', link: 'https://www.shareclass.org/course/60867e95bb2f487782dffcfe9c65f1e7/', tags: '#10年級 #11年級 #12年 #國語文 #清', formats: 'pdf' },
  { name: '句型遊戲：間接問句簡化 where I can go --> where to go', link: 'https://www.shareclass.org/course/94874f398d2040868701156e38ed5e95/', tags: '＃1年級 #英語文 #句型 #文法', formats: 'PDF | docx' },
  { name: '地圖判讀與地理資訊', link: 'https://www.shareclass.org/course/c760aa0657e74f13be7e4b8b1a851b8c/', tags: '＃10年級 #地理 #地理概說和地圖 #地理 #地理資訊和地形', formats: 'docx' },
  { name: '9劉姥姥進大觀園', link: 'https://www.shareclass.org/course/60867e95bb2f487782dffcfe9c65f1e7/', tags: '#10年級 #11年級 #12年 #國語文 #清', formats: 'pdf' },
  // {name: '', link: '', tags: '', formats: ''},
];

const COLUMNS: string[] = ['name', 'formats'];

@Component({
  selector: 'app-shared-plans',
  templateUrl: './shared-plans.component.html',
  styleUrls: ['./shared-plans.component.scss']
})
export class SharedPlansComponent implements OnInit {
  constructor() { }

  readonly columns = COLUMNS;
  extenalPlans: ExtenalPlan[];

  ngOnInit(): void {
    this.extenalPlans = MOCK_PLANS;
  }

  openLink(plan: ExtenalPlan): void {
    window.open(plan.link, '_blank');
  }

  // @HostListener('window:scroll', ['$event'])
  // onTableScroll(e) {
  //   console.log(1);
  //   const tableViewHeight = e.target.offsetHeight // viewport: ~500px
  //   const tableScrollHeight = e.target.scrollHeight // length of all table
  //   const scrollLocation = e.target.scrollTop; // how far user scrolled

  //   // If the user has scrolled within 200px of the bottom, add more data
  //   const buffer = 200;
  //   const limit = tableScrollHeight - tableViewHeight - buffer;
  //   if (scrollLocation > limit) {
  //     this.extenalPlans = this.extenalPlans.concat(MOCK_PLANS);
  //   }
  // }
}
