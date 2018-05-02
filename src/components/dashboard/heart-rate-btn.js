import React from 'react';
import {connect} from 'react-redux';

import { populatePieGraph } from '../../actions';

const TestData = [
	{
		value: 300,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Red"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Green"
	},
	{
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Yellow"
	}
]


export class HeartRateBtn extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	populatePieGraph(heartRateData, graphType){
		this.props.dispatch(populatePieGraph(heartRateData, graphType));
	}
	
	onClick(event) {
		//Ajax call which will then call the populateBarGraph action.
		console.log('onclick triggered')
		this.populatePieGraph(TestData, 'pie');
	}

	render(){
		return(
			<button id='heartRate' className='navBtn'
			onClick={this.onClick}>
			View Todays Heart Rate Breakdown</button>
		)
	}
}

export default connect()(HeartRateBtn);