import React from 'react';
import {connect} from 'react-redux';


export class GoalsSection extends React.Component {

	render(props){
		if(this.props.goals){
			return(
				<div>
					<h2 className='center'> Goals </h2>
					<ul>
						<li>Steps: {this.props.goals.steps}</li>
						<li>Calories: {this.props.goals.calories}</li>
						<li>Active Minutes: {this.props.goals.activeMinutes}</li>
						<li>Distance: {this.props.goals.distance}</li>
						<li>Floors: {this.props.goals.floors}</li>
					</ul>
				</div>
			)
		}
		return null;
	}
}

const mapStateToProps = state => ({
	goals: state.motivatr.goals
})

export default connect(mapStateToProps)(GoalsSection);