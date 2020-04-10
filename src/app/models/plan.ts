interface PlanParams {
    id?: string;
    title?: string;
    lastchangeAt?: Date;
    content?: string;
}

export class Plan {
    constructor(params?: PlanParams) {
        Object.assign(this, params);
    }

    id: string;
    title: string;
    lastchangeAt: Date;
    content: string;

    static from(json): Plan {
        return Object.assign(new Plan(), json, { lastchangeAt: new Date(json.lastchangeAt) });
    }

    static fromArray(json): Plan[] {
        return Object.values(json).map<Plan>((p) => this.from(p));
    }
}