import React from 'react';
import {connect} from 'react-redux';

import './intro-content.css';

import RegistrationForm from './registration-form'; 
import IntroFooter from './intro-footer';
import LoginForm from './login-form';
import DemoBtn from './demo-btn';

export function IntroContent(props) {

	if(props.login === true){
		return(
			<div id='introContent' className='col-4'>
				<h2 id='introTitle'>Helping You Stay Motivated to Reach All Your Fitness Goals</h2>
				<p id='introText'>The MotivATR app allows you and a partner to remain accountable for
				all your fitness goals regardless of how far apart you are. A fitbit account is currently
				required to use this app.
				</p>
				<p>Make a new account below to get started!</p>
				<p>If you would like to explore the App without making an account
				just hit the Demo button bellow.</p>
				<DemoBtn />
				<LoginForm />
				<IntroFooter />
			</div>
		)
	}
	return(
		<div id='introContent' className='col-4'>
		<h2 id='introTitle'>Helping You Stay Motivated to Reach All Your Fitness Goals</h2>
		<p id='introText'>The MotivATR app allows you and a partner to remain accountable for
		all your fitness goals regardless of how far apart you are. A fitbit account is currently
		required to use this app.
		</p>
		<p>Make a new account below to get started!</p>
		<p>If you would like to explore the App without making an account
		just hit the Demo button bellow.</p>
		<DemoBtn />
		<RegistrationForm />
		<IntroFooter />
	</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	login: state.motivatr.login
});

export default connect(mapStateToProps)(IntroContent);