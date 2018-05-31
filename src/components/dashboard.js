import React from 'react';

import Header from './header';
import SideNav from './dashboard/side-nav.js';
import Graphs from './dashboard/graphs';
import Logout from './dashboard/logout';
import GoalsGraph from './dashboard/goals-graph';

export default function Dashboard(props) {
  return(
    <div>
			<Header />
      <Logout />
      <SideNav />
      <Graphs />
      <GoalsGraph />
    </div>
  )
}