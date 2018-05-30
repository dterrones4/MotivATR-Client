import React from 'react';
import {connect} from 'react-redux';

import { populateGoalStatusGraph, getFitbitGoalsData } from '../../actions/actions';

const TestData =  {
	distance: 3,
	elevation: 18,
	floors: 7,
	steps: 8000,
	calories: 3000
}

const TestGoalsData =  {
	distance: 5,
	elevation: 20,
	floors: 10,
	steps: 10000,
	calories: 4000
}

export class GoalStatusBtn extends React.Component {
	onClick(props) {
		if(this.props.demo === true){
			return this.props.dispatch(populateGoalStatusGraph(TestData, TestGoalsData, 'goals'));
		}
		//If Demo mode is off make call to FitBit for UserData.
		return this.props.dispatch(getFitbitGoalsData(this.props.currentUser.id));
	}

	render(){
		return(
			<button id='barGraph' className='navBtn'
			onClick={() => this.onClick()}>
			View Todays Goal Progress</button>
		)
	}
}

const mapStateToProps = state => ({
	demo: state.motivatr.demo,
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(GoalStatusBtn);