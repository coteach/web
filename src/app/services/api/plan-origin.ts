interface PlanOriginParams {
    id?: string;
    name?: string;
    url?: boolean;
    logo?: string;
}

/**
 * 教案來源
 */
export class PlanOrigin {
    /**
     * 識別碼
     */
    id: string;
    /**
     * 名稱
     */
    name: string;
    /**
    * 網址
    */
    url: string;
    /**
     * logo 位置
     */
    logo?: string;

    constructor(params?: PlanOriginParams) {
        Object.assign(this, params);
    }

    static from(json): PlanOrigin { return Object.assign(new PlanOrigin(), json); }

    static fromArray(json): PlanOrigin[] { return Object.values(json).map<PlanOrigin>((p) => this.from(p)); }
}