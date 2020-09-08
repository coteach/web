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
}