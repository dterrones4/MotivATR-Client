import React from 'react';

import './intro-content.css';

import RegistrationForm from './registration-form'; 
import IntroFooter from './intro-footer';

export default function IntroContent(props) {
	return(
		<div id='introContent' className='col-4'>
			<h2 id='introTitle'>Helping You Stay Motivated to Reach All Your Fitness Goals</h2>
		  <p id='introText'>The MotivATR app allows you and a partner to remain accountable for
			all your fitness goals regardless of how far apart you are. A fitbit account is currently
			required to use this app.
		  </p>
		  <p>Make a new account below to get started!</p>
		  <p>If you would like to explore the App without making an account
			you can sign in with<br/>Email: demo@gmail.com<br/>Password: demo123.</p>
			<RegistrationForm />
			<IntroFooter />
		</div>
	)
}
