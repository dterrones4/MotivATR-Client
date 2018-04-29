import React from 'react';

import './side-nav.css';

import DropDown from './drop-down.js'

export default function SideNav(props) {
	return(
		<div className='sidenav col-4'>
			<button id = 'barGraph' className='navBtn'>View Todays Activity</button>
		  <button id = 'heartRate' className='navBtn'>View Todays Heart Rate Breakdown</button>
		  <button id = 'currentGoals' className='navBtn'>View Todays Goal Progress</button>
			<DropDown />
		</div>
	)
}