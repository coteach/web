interface ExtenalPlanParams {
    name?: string;
    link?: string;
    formats?: string;
    tags?: string;

    // https://www.shareclass.org/course/default/
    // 名稱
    // 縮圖
    // 附件數量
    // 檔案格式[]
    // 作者
    // 作者頭像
    // 瀏覽次數
    // 下載次數
    // 上傳時間
    // 簡述
    // 年級
    // 科目單元
    // 收藏人數 
}

export class ExtenalPlan {
    constructor(params?: ExtenalPlanParams) {
        Object.assign(this, params);
    }

    name: string;
    link: string;
    formats: string;
    tags: string;

    static from(json): ExtenalPlan {
        return Object.assign(new ExtenalPlan(), json, { lastchangeAt: new Date(json.lastchangeAt) });
    }

    static fromArray(json): ExtenalPlan[] {
        return Object.values(json).map<ExtenalPlan>((p) => this.from(p));
    }
}