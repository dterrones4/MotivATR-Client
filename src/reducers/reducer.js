import * as actions from '../actions/actions';

const initialState = {
    activityData: {},
    heartRateData: {},
    graphType: null,
    goals: null,
    demo: false
};

export default function reducer(state = initialState, action){
    if(action.type === actions.POPULATE_BAR_GRAPH){
        return Object.assign({}, state, {
            activityData: action.activityData,
            graphType: action.graphType
        });
    }

    if(action.type === actions.POPULATE_PIE_GRAPH){
        return Object.assign({}, state, {
            heartRateData: action.heartRateData,
            graphType: action.graphType
        });
    }

    if(action.type === actions.SET_DEMO){
        return Object.assign({}, state, {
            demo: action.demo
        });
    }

    return state; 
}