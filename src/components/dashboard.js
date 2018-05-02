import React from 'react';

import Header from './header';
import SideNav from './dashboard/side-nav.js';
import Graphs from './dashboard/graphs';

export default function Dashboard(props) {
  return(
    <div>
			<Header />
      <SideNav />
      <Graphs />
    </div>
  )
}