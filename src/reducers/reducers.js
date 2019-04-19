import * as actions from '../actions/actions';

let PLAN = require('../PlanInfo');
//Keys for traversal: PLAN.type.(run || tri).level.(beg || int || adv).(...5k).[initial state keys[0-6]]

const initialState = {
    title: '',
    sku: '',
    weeks: '',
    miles: '',
    why1: '',
    why2: '',
    price: ''
};

export const planReducer = (state=initialState, action) => {
    if (action.type === actions.SHOW_PLAN) {
        if (action.level === 'beginner' && action.planType === '5k'){
            return Object.assign({}, state, {
                title: PLAN.type.run.level.beg.fiveK.title,
                sku: PLAN.type.run.level.beg.fiveK.sku,
                weeks: PLAN.type.run.level.beg.fiveK.weeks,
                miles: PLAN.type.run.level.beg.fiveK.miles,
                why1: PLAN.type.run.level.beg.fiveK.why1,
                why2: PLAN.type.run.level.beg.fiveK.why2,
                price: PLAN.type.run.level.beg.fiveK.price
            });
        }
    }
    
    return state;
}