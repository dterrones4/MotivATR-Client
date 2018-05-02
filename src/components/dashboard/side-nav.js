import React from 'react';

import './side-nav.css';

import DropDown from './drop-down.js';
import BarGraphBtn from './bar-graph-btn';
import HeartRateBtn from './heart-rate-btn';

export default function SideNav(props) {
	return(
		<div className='sidenav col-4'>
			<BarGraphBtn />
		  <HeartRateBtn />
		  <button id = 'currentGoals' className='navBtn'>View Todays Goal Progress</button>
			<DropDown />
		</div>
	)
}