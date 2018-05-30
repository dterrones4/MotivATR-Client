import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const POPULATE_BAR_GRAPH = 'POPULATE_BAR_GRAPH';
export const populateBarGraph = (activityData, goals, graphType) => ({
	type: POPULATE_BAR_GRAPH,
	activityData,
	goals,
	graphType
});

export const POPULATE_PIE_GRAPH = 'POPULATE_PIE_GRAPH';
export const populatePieGraph = (heartRateData, goals, graphType) => ({
	type: POPULATE_PIE_GRAPH,
	heartRateData,
	goals,
	graphType
});

export const POPULATE_GOAL_STATUS_GRAPH = 'POPULATE_GOAL_STATUS_GRAPH';
export const populateGoalStatusGraph = (activityData, goals, graphType) => ({
	type: POPULATE_GOAL_STATUS_GRAPH,
	goals,
	activityData,
	graphType
})

export const SET_DEMO = 'SET_DEMO';
export const setDemo = (demo) => ({
	type: SET_DEMO,
	demo
})

export const CHANGE_USER_LOGIN_STATE = 'CHANGE_USER_LOGIN_STATE';
export const changeUserLoginState = (login) => ({
	type: CHANGE_USER_LOGIN_STATE,
	login
})

export const REDIRECT_TO_DASHBOARD = 'REDIRECT_TO_DASHBOARD';
export const redirectToDashboard = (fbAuthorized) => ({
	type: REDIRECT_TO_DASHBOARD,
	fbAuthorized
})

export const storeFitbitTokens = (data) => (dispatch) => {
	return( fetch(`${API_BASE_URL}/user/fitbitAuthToken`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
			.then(res => normalizeResponseErrors(res))
			.then(res => res.json())
			.then(res => dispatch(redirectToDashboard(res)))
			.catch(err => {
					console.log(err);
			})
	);
};

export const getFitbitActivityData = (id) => (dispatch) => {
	const body = {
		id: id
	}
	return new Promise((resolve, reject) => {
		fetch(`${API_BASE_URL}/user/home`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})		
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(res => {
			const activityData = {
				distance: res.summary.distances[0].distance,
				elevation: res.summary.elevation,
				floors: res.summary.floors,
				steps: res.summary.steps,
				calories: res.summary.caloriesOut,
			}

			const goalsData = {
				activeMinutes: res.goals.activeMinutes,
				calories: res.goals.caloriesOut,
				distance: res.goals.distance,
				floors: res.goals.floors,
				steps: res.goals.steps
			}
		
			dispatch(populateBarGraph(activityData, goalsData, 'bar'))
		})
		.catch(err => {
			console.log(err);
		})
	});
}

export const getFitbitHeartRateData = (id) => (dispatch) => {
	const body = {
		id: id
	}
	return new Promise((resolve, reject) => {
		fetch(`${API_BASE_URL}/user/home`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})		
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(res => {
			console.log(res);
			const goalsData = {
				activeMinutes: res.goals.activeMinutes,
				calories: res.goals.caloriesOut,
				distance: res.goals.distance,
				floors: res.goals.floors,
				steps: res.goals.steps
			}
		
			const activeMinutesData = {
				sendentaryMinutes: res.summary.sedentaryMinutes,
				lightlyActiveMinutes: res.summary.lightlyActiveMinutes,
				fairlyActiveMinutes: res.summary.fairlyActiveMinutes,
				veryActiveMinutes: res.summary.veryActiveMinutes
			}
			dispatch(populatePieGraph(activeMinutesData, goalsData, 'pie'))
		})
		.catch(err => {
			console.log(err);
		})
	});
}

export const getFitbitGoalsData = (id) => (dispatch) => {
	const body = {
		id: id
	}
	return new Promise((resolve, reject) => {
		fetch(`${API_BASE_URL}/user/home`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})		
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(res => {

			const goalsData = {
				activeMinutes: res.goals.activeMinutes,
				calories: res.goals.caloriesOut,
				distance: res.goals.distance,
				floors: res.goals.floors,
				steps: res.goals.steps
			}
		
			const activityData = {
				distance: res.summary.distances[0].distance,
				elevation: res.summary.elevation,
				floors: res.summary.floors,
				steps: res.summary.steps,
				calories: res.summary.caloriesOut,
			}
			dispatch(populateGoalStatusGraph(activityData, goalsData, 'goals'))
		})
		.catch(err => {
			console.log(err);
		})
	});
}
