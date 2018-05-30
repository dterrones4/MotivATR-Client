import * as actions from '../actions/actions';

const initialState = {
    activityData: {},
    heartRateData: {},
    graphType: null,
    goals: null,
    demo: false,
    login: false
};

export default function reducer(state = initialState, action){
    if(action.type === actions.POPULATE_BAR_GRAPH){
        return Object.assign({}, state, {
            activityData: action.activityData,
            graphType: action.graphType,
            goals: action.goals
        });
    }

    if(action.type === actions.POPULATE_PIE_GRAPH){
        return Object.assign({}, state, {
            heartRateData: action.heartRateData,
            graphType: action.graphType,
            goals: action.goals
        });
    }

    if(action.type === actions.POPULATE_GOAL_STATUS_GRAPH){
        return Object.assign({}, state, {
            goals: action.goals,
            graphType: action.graphType,
            activityData: action.activityData
        });
    }

    if(action.type === actions.SET_DEMO){
        return Object.assign({}, state, {
            demo: action.demo
        });
    }

    if(action.type === actions.CHANGE_USER_LOGIN_STATE){
        if(state.login === true){
            return Object.assign({}, state, {
                login: false
            })
        }
        return Object.assign({}, state, {
            login: true
        })
    }

    if(action.type === actions.REDIRECT_TO_DASHBOARD){
        return Object.assign({}, state, {
            fbAuthorized: true
        })
    }

    return state; 
}