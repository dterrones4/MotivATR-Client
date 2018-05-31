import React from 'react';
import {reduxForm, Field} from 'redux-form';

import Input from './input';
import {registerUser} from '../../actions/actions';
import {login} from '../../actions/auth';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import './registration-form.css';

const passwordLength = length({min: 10, max: 72});
const phoneLength = length(10);
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
	onSubmit(values) {
		const {email, password, phoneNumber} = values;
		const loginValues = {email, password};
		const user = {email, password, phoneNumber};
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(loginValues)));
	}

	render(){
		return(
			<form id='registrationForm' className='form center'
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
			<Field component={Input} name ='email' type = 'email' id='email' label ='Email'
				validate ={[required, nonEmpty, isTrimmed]} />
			<Field component={Input} name ='phoneNumber' type = 'text' id='phoneNumber' label ='Phone Number' 
				validate={[required, phoneLength, isTrimmed]}/>
			<Field component={Input} name ='password' type = 'password' id='password' label ='Password' 
				validate={[required, passwordLength, isTrimmed]}/>
			<Field component={Input} name ='confirm_password' type = 'password' id='confirm_password' label ='Confirm Password' 
				validate={[required, nonEmpty, matchesPassword]}/>
			<button type='submit' className='btn'>Get Started</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'registration'
})(RegistrationForm);