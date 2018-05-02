import * as actions from './actions';

const initialState = {
    activityData: {},
    heartRateData: {},
    graphType: null,
    goals: null,
    demo: false
};

export const reducer = (state = initialState, action) => {
    if(action.type === actions.POPULATE_BAR_GRAPH){
        return Object.assign({}, state, {
            activityData: action.activityData,
            graphType: action.graphType
        },console.log(state));
    }

    if(action.type === actions.POPULATE_PIE_GRAPH){
        return Object.assign({}, state, {
            heartRateData: action.heartRateData,
            graphType: action.graphType
        },console.log(state));
    }

    return state; 
}