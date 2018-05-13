import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const POPULATE_BAR_GRAPH = 'POPULATE_BAR_GRAPH';
export const populateBarGraph = (activityData, graphType) => ({
	type: POPULATE_BAR_GRAPH,
	activityData,
	graphType
});

export const POPULATE_PIE_GRAPH = 'POPULATE_PIE_GRAPH';
export const populatePieGraph = (heartRateData, graphType) => ({
	type: POPULATE_PIE_GRAPH,
	heartRateData,
	graphType
});

export const SET_DEMO = 'SET_DEMO';
export const setDemo = (demo) => ({
	type: SET_DEMO,
	demo
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
			.catch(err => {
					console.log(err);
			})
	);
};