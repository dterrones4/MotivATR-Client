import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';

import Input from './input';
import {login} from '../../actions/auth';

import './registration-form.css';

export class LoginForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(login(values));
	}

	render() {
		let error;
		if (this.props.error) {
				error = (
						<div className="form-error" aria-live="polite">
								{this.props.error}
						</div>
				);
		}
		return(
			<form id='loginForm' className='form center'
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
			{error}
			<Field component={Input} name='email' type='email' id='email' label ='Email' />
			<Field component={Input} name='password' type='password' id='password' label ='Password' />
			<button type='submit' className='btn'>Log in</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('email', 'username'))
})(LoginForm);