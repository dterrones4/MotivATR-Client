import React from 'react';
import {connect} from 'react-redux';

import { populateBarGraph, getFitbitActivityData } from '../../actions/actions';

const TestData =  {
	distance: 25,
	activeMinutes: 20,
	floors: 15,
	steps: 8000,
	calories: 3000
}

const TestGoals = {
	distance: 5,
	activeMinutes: 30,
	floors: 10,
	steps: 10000,
	calories: 4000
}

export class BarGraphBtn extends React.Component {
	onClick(props) {
		if(this.props.demo === true){
			return this.props.dispatch(populateBarGraph(TestData, TestGoals, 'bar'));
		}
		//If Demo mode is off make call to FitBit for UserData.
		return this.props.dispatch(getFitbitActivityData(this.props.currentUser.id));
	}

	render(){
		return(
			<button id='barGraph' className='navBtn'
			onClick={() => this.onClick()}>
			View Todays Activity</button>
		)
	}
}

const mapStateToProps = state => ({
	demo: state.motivatr.demo,
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(BarGraphBtn);