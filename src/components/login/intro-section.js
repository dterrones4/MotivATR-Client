import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './intro-section.css';
import IntroContent from './intro-content';
import DemoBtn from './demo-btn';
import RegistrationFrom from './registration-form';

export function IntroSection(props) {
	//if we are logged in redirect straight to user's dashboard
	if(props.loggedIn){
		return <Redirect to='/fitbitAuth' />
	}

  return(
		<div id='introSection' className='center row'>
			<IntroContent />
			<DemoBtn />
			<RegistrationFrom />
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(IntroSection)