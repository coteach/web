
export enum Path {
    MyPlans = 'my-plans',
    EditingPlan = 'plan/:id',
    ViewingPlan = ':someone/:title',
    Search = 'search',
    Starred = 'starred',
}

export enum RouterLink {
    MyPlans = '/my-plans',
    EditingPlan = '/plan',
    ViewingPlan = '/',
    Search = '/search',
    Starred = '/starred',
}