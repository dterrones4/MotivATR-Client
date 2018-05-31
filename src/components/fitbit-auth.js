import React from 'react';

import Header from './header';
import './fitbit-auth.css';

export default function FitbitAuth(props) {
  return(
		<main>
			<Header />
			<div id='fitbitAuth' className='center row'>
			Before we get started we need to link up your fitbit account. Click <a href="https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22CV92&redirect_uri=https%3A%2F%2Fmotivatr.netlify.com%2FfitbitAuthToken&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">Here</a>
			</div>
		</main>
	)
}