import React from 'react';
import {connect} from 'react-redux';

import './graphs.css';

import {Bar as BarChart, Pie as PieChart} from 'react-chartjs';

export function Graphs(props){

	if(props.graphType === 'bar'){
		return(
			<div>
				<div className='chartContainer col-8'>
				<BarChart data={props.activityData} width='400' height='400'/>
				</div>
				<div className='chartContainer col-8'>
					<BarChart data={props.activityData} width='400' height='400'/>
				</div>
			</div>
		)
	}
	if(props.graphType === 'pie'){
		return(
			<div className='chartContainer col-8'>
			<PieChart data={props.heartRateData} width='400' height='400'/>
			</div>
		)
	}
	return null;
}

const mapStateToProps = state => ({
	activityData: state.motivatr.activityData,
	graphType: state.motivatr.graphType,
	heartRateData: state.motivatr.heartRateData
});

export default connect(mapStateToProps)(Graphs);