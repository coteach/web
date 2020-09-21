import { PlanOrigin } from './plan-origin';

interface PlanParams {
    originId: string;
    title?: string;
    page?: string;
    formats?: boolean;
}

/**
 * 教案
 */
export class Plan {
    /**
     * 來源識別碼
     */
    originId: string;
    /**
     * 標題
     */
    title: string;
    /**
     * 頁面
     */
    page: string;
    /**
     * 檔案格式
     */
    formats: string;

    constructor(params?: PlanParams) {
        Object.assign(this, params);
    }

    static from(json): Plan {
        let plan = Object.assign(new Plan(), json);
        plan.originId = json.origin_id;

        return plan;
    }

    static fromArray(json): Plan[] { return Object.values(json).map<Plan>((p) => this.from(p)); }

}