import React from 'react';
import {connect} from 'react-redux';

import { populatePieGraph, getFitbitHeartRateData } from '../../actions/actions';

const TestData = {
	sendentaryMinutes: 320,
	lightlyActiveMinutes: 120,
	fairlyActiveMinutes: 60,
	veryActiveMinutes: 30
}
const TestGoals ={
	distance: 5,
	elevation: 20,
	floors: 10,
	steps: 10000,
	calories: 4000
}

export class HeartRateBtn extends React.Component {
onClick(props){
	if(this.props.demo === true){
		return this.props.dispatch(populatePieGraph(TestData, TestGoals, 'pie'));
	}

	return this.props.dispatch(getFitbitHeartRateData(this.props.currentUser.id));
}

	render(){
		return(
			<button id='heartRate' className='navBtn'
			onClick={() => this.onClick()}>
			View Todays Heart Rate Breakdown</button>
		)
	}
}

const mapStateToProps = state => ({
	demo: state.motivatr.demo,
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(HeartRateBtn);