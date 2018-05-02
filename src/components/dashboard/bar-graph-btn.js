import React from 'react';
import {connect} from 'react-redux';

import { populateBarGraph } from '../../actions';

const TestData = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};

export class BarGraphBtn extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	populateBarGraph(activityData, graphType){
		this.props.dispatch(populateBarGraph(activityData, graphType));
	}
	
	onClick(event) {
		//Ajax call which will then call the populateBarGraph action.
		console.log('onclick triggered')
		this.populateBarGraph(TestData, 'bar');
	}

	render(){
		return(
			<button id='barGraph' className='navBtn'
			onClick={this.onClick}>
			View Todays Activity</button>
		)
	}
}

export default connect()(BarGraphBtn);