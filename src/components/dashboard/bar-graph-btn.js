import React from 'react';
import {connect} from 'react-redux';

import { populateBarGraph } from '../../actions/actions';

const TestData = {
	labels: ["Steps", "Calories",],
	datasets: [
		{
			label: "Todays Progress",
			fillColor: "#5959EC",
			strokeColor: "white",
			highlightFill: "#9A9AE9",
			highlightStroke: "white",
			data: [8000, 2346]
		}
	]
};

export class BarGraphBtn extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	
	onClick(event) {
		if(this.props.demo === true){
			this.props.dispatch(populateBarGraph(TestData, 'bar'));
		}
		//If Demo mode is off make call to FitBit for UserData.
		this.props.dispatch(populateBarGraph(TestData, 'bar'));
	}

	render(){
		return(
			<button id='barGraph' className='navBtn'
			onClick={this.onClick}>
			View Todays Activity</button>
		)
	}
}

const mapStateToProps = state => {
	demo: state.motivatr.demo
}

export default connect()(BarGraphBtn);