import React from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {connect} from 'react-redux';

import Input from './input';

import './registration-form.css';

export class LoginForm extends React.Component {
	onSubmit(values) {
		if(values.email === 'demo@gmail.com'){
			console.log('demo function triggered')
		}
		else{
			return fetch('./api/users', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(res => {
					if(!res.ok){
						if (
							res.headers.has('content-type') &&
							res.headers
									.get('content-type')
									.startsWith('application/json')
						) {
							// It's a nice JSON error returned by us, so decode it
							return res.json().then(err => Promise.reject(err));
						}
						// It's a less informative error returned by express
						return Promise.reject({
							code: res.status,
							message: res.statusText
						});
					}
					return;
				})
				.then(() => console.log('Submitted with values', values))
				.catch(err => {
					const {reason, message, location} = err;
					if (reason === 'ValidationError') {
							// Convert ValidationErrors into SubmissionErrors for Redux Form
							return Promise.reject(
									new SubmissionError({
											[location]: message
									})
							);
					}
					return Promise.reject(
							new SubmissionError({
									_error: 'Error submitting message'
							})
					);
				});
		}
	}

	render(){
		return(
			<form id='loginForm' className='form center'
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
			<Field component={Input} name ='email' type = 'email' id='email' label ='Email' />
			<Field component={Input} name ='password' type = 'password' id='password' label ='Password' />
			<button type='submit' className='btn'>Login</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'loginForm'
})(LoginForm);