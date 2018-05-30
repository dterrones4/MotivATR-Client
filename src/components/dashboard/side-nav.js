import React from 'react';

import './side-nav.css';

import GoalTime from './goal-time.js';
import BarGraphBtn from './bar-graph-btn';
import HeartRateBtn from './heart-rate-btn';
import SetMotivatr from './set-motivatr.js';
import GoalStatusBtn from './goal-status-btn';
import GoalsSection from './goals-section';

export default function SideNav(props) {
	return(
		<div className='sidenav col-4'>
			<BarGraphBtn />
		  <HeartRateBtn />
		  <GoalStatusBtn />
			<GoalTime />
			<SetMotivatr />
			<GoalsSection />
		</div>
	)
}