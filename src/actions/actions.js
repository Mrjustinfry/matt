export const SHOW_PLAN = 'SHOW_PLAN';
export const showPlan = (level, planType) => ({
    type: SHOW_PLAN,
    level,
    planType
});