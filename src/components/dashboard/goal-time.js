import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './drop-down.css';

import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const showSecond = false;

export default class GoalTime extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isActive: false
		}

		this.handleClick = this.handleClick.bind(this);
	}


  handleClick(){
		if(this.state.isActive === false){
			this.setState({
				isActive: true
			})
		}
		else{
			this.setState({
			isActive: false
			})
		}
  }

	render(){
		if(this.state.isActive === false){
			return(
				<div>
				<button id = 'setTime' className='navBtn collapsible'onClick={this.handleClick}>Set Goal End Time</button>
				</div>
			)
		}
		return (
			<div>
			<button id = 'setTime' className='navBtn collapsible' onClick={this.handleClick}>Set Goal End Time</button>
			<div className='center content'>
			<p>Goals not met by this time will result in an "incomplete goals" text being sent to your MotivATR</p>
				<p>Submiting a goal time will replace any previously set goal time</p>
				<TimePicker
					style={{ width: 100, display: 'block', margin: 'auto' }}
					showSecond={showSecond}
					defaultValue={moment()}
					className="xxx"
				/>
				<button className='' onClick={this.handleClick}>Submit</button>
			</div>
			</div>
		)
	}
}
