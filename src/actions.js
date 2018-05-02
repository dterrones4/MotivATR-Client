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

