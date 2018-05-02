import React from 'react';

import './drop-down.css';

export default function DropDown(props){
	return(
		<div>
		<button id = 'setTime' className='navBtn collapsible'>Set Goal End Time</button>
		<button id = 'setMotivatr' className='navBtn collapsible'>Sign Up MotivATR</button>
		</div>
	)
}