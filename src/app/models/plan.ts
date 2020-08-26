interface PlanParams {
    id?: string;
    userId?: string;
    title?: string;
    starred?: boolean;
    content?: string;
    tags?: string;
    origin?: string;
    formats?: string;
    lastchangeAt?: Date;
}

/**
 * 教案
 */
export class Plan {
    constructor(params?: PlanParams) {
        Object.assign(this, params);
    }

    /**
     * 識別碼
     */
    id: string;
    /**
     * 用戶識別碼
     */
    userId: string;
    /**
     * 標題
     */
    title: string;
    /**
     * 已關注
     */
    starred: boolean;
    /**
     * 內容
     */
    content: string;
    /**
    * 標籤
    */
    tags: string;
    /**
     * 外部來源網址
     */
    origin: string;
    /**
    * 外部來源檔案格式
    */
    formats: string;
    /**
     * 最後修改時間
     */
    lastchangeAt?: Date;

    static from(json): Plan {
        return Object.assign(new Plan(), json, { lastchangeAt: new Date(json.lastchangeAt) });
    }

    static fromArray(json): Plan[] {
        return Object.values(json).map<Plan>((p) => this.from(p));
    }

    get isExternal(): boolean {
        return this.origin !== undefined;
    }
}