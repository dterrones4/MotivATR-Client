import React from 'react';
import {connect} from 'react-redux';

import './graphs.css';

import {Bar as BarChart, Pie as PieChart} from 'react-chartjs';

export function Graphs(props){

	const barGraphData1 = {
			labels: ["Steps", "Calories",],
			datasets: [
				{
					label: "Todays Progress",
					fillColor: ['#002953', '#c7f464'],
					strokeColor: "white",
					highlightFill: "#9A9AE9",
					highlightStroke: "white",
					data: [props.activityData.steps, props.activityData.calories]
				},
			]
	}

	const barGraphData2 = {
		labels: ["elevation(feet)", "distance(Miles)", "floors"],
		datasets: [
			{
				label: "Todays Progress",
				fillColor: ['#ff6b6b', '#95d4f3', '#f1bb1b'],
				strokeColor: "white",
				highlightFill: "#9A9AE9",
				highlightStroke: "white",
				data: [props.activityData.elevation, props.activityData.distance, props.activityData.floors]
			}
		]
}

	if(props.graphType === 'bar'){
		return(
			<div>
				<div className='chartContainer col-8'>
				<BarChart data={barGraphData1} width='400' height='400'/>
				</div>
				<div className='chartContainer col-8'>
					<BarChart data={barGraphData2} width='400' height='400'/>
				</div>
			</div>
		)
	}
	if(props.graphType === 'pie'){
		const heartRateData = [
			{
				value: props.heartRateData.sendentaryMinutes,
				color:"#002953",
				highlight: "#002953",
				label: "Out of Range(30-94bpm)"
			},
			{
				value: props.heartRateData.lightlyActiveMinutes,
				color: "#c7f464",
				highlight: "#c7f464",
				label: "Fat Burn (94-134bpm)"
			},
			{
				value: props.heartRateData.fairlyActiveMinutes,
				color: "#ff6b6b",
				highlight: "#ff6b6b",
				label: "Cardio(131-159bpm)"
			},
			{
				value: props.heartRateData.veryActiveMinutes,
				color: "#95d4f3",
				highlight: "#95d4f3",
				label: "Peak(159-220bpm)"
			}
		]
		
		return(
			<div className='chartContainer col-8'>
			<h2 className='center'>Heart Rate Breakdown</h2>
			<PieChart data={heartRateData} width='400' height='400'/>
			</div>
		)
	}

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
				labels: ["elevation(feet)", "distance(miles)", "floors"],
				datasets: [
					{
						label: "Current Goal",
						fillColor: ['#f1bb1b', '#f1bb1b', '#f1bb1b'],
						strokeColor: "white",
						highlightStroke: "white",
						data: [props.goals.elevation, props.goals.distance, props.goals.floors]
					},
					{
						label: "Todays Progress",
						fillColor: ['#ff6b6b', '#ff6b6b', '#ff6b6b'],
						strokeColor: "white",
						highlightStroke: "white",
						data: [props.activityData.elevation, props.activityData.distance, props.activityData.floors]
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
	heartRateData: state.motivatr.heartRateData,
	goals: state.motivatr.goals
});

export default connect(mapStateToProps)(Graphs);