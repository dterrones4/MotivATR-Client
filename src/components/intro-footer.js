import React from 'react';

import './intro-footer.css';

export default function IntroFooter(props) {
	return(
		<div>
			<p className='loginHere'><a id='register' href='register'>Sign Up</a></p>
			<p className='loginHere'>Already have an account? <a id='login' href='Login'>Login</a></p>
		</div>
	)
}