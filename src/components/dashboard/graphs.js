import React from 'react';
import {connect} from 'react-redux';

import './graphs.css';

let BarChart = require("react-chartjs").Bar;
let PieChart = require("react-chartjs").Pie;

export function Graphs(props){

	if(props.graphType === 'bar'){
		return(
			<BarChart data={props.activityData} />
		)
	}
	if(props.graphType === 'pie'){
		//if props.demo === true then use fake data else return real data.
		return(
			<PieChart data={props.heartRateData} />
		)
	}
	return(
		null
	)
}

const mapStateToProps = state => ({
	activityData: state.activityData,
	graphType: state.graphType,
	heartRateData: state.heartRateData
});

export default connect(mapStateToProps)(Graphs);