import React from 'react';
import {connect} from 'react-redux';

import './graphs.css';

import {Bar as BarChart} from 'react-chartjs';

export function GoalsGraph(props){
	if(props.graphType === 'goals'){
		const data1 = {
			labels: ["Steps", "Calories",],
			datasets: [
				{
					label: "Current Goal",
					fillColor: ['#c7f464', '#c7f464'],
					strokeColor: "white",
					highlightStroke: "white",
					data: [props.goals.steps, props.goals.calories]
				},
				{
					label: "Todays Progress",
					fillColor: ['#002953', '#002953'],
					strokeColor: "white",
					highlightStroke: "white",
					data: [props.activityData.steps, props.activityData.calories]
				}
			]
		}
		const data2 = {
				labels: ["Active Minutes", "distance(miles)", "floors"],
				datasets: [
					{
						label: "Current Goal",
						fillColor: ['#f1bb1b', '#f1bb1b', '#f1bb1b'],
						strokeColor: "white",
						highlightStroke: "white",
						data: [props.goals.activeMinutes, props.goals.distance, props.goals.floors]
					},
					{
						label: "Todays Progress",
						fillColor: ['#ff6b6b', '#ff6b6b', '#ff6b6b'],
						strokeColor: "white",
						highlightStroke: "white",
						data: [props.activityData.activeMinutes, props.activityData.distance, props.activityData.floors]
					}
				]
		}
		return(
			<div>
				<div className='chartContainer col-8'>
					<BarChart data={data1} width='400' height='400'/>
				</div>
				<div className='chartContainer col-8'>
					<BarChart data={data2} width='400' height='400'/>
				</div>
			</div>
		)
	}
	return null;
}

const mapStateToProps = state => ({
	activityData: state.motivatr.activityData,
	graphType: state.motivatr.graphType,
	goals: state.motivatr.goals
});

export default connect(mapStateToProps)(GoalsGraph);