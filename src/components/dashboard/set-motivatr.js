import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './drop-down.css';

import Input from '../login/input';

export class SetMotivatr extends React.Component{
	onSubmit(values) {
		console.log(values);
}

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
				<button id = 'setTime' className='navBtn collapsible'onClick={this.handleClick}>Set MotivATR</button>
				</div>
			)
		}
		return (
			<div>
			<button id = 'setTime' className='navBtn collapsible' onClick={this.handleClick}>Set MotivATR</button>
			<div className='content center'>
				<p>Enter phone number of the person you would like to reveive goal complete & goal incomplete texts</p>
				<p>Submitting a phone number will erase any previously set phone numbers</p>
				<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor='phoneNumber'>Motivatr's Phone Number</label>
				<Field name='motivatrPhoneNumber' type='tel' component={Input} />
				<button type='submit' onClick={this.handleClick}>Submit</button>
				</form>
			</div>
			</div>
		)
	}
}

export default reduxForm({
	form: 'setMotivatr'
})(SetMotivatr);