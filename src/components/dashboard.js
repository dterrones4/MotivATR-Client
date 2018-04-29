import React from 'react';

import Header from './header';
import IntroSection from './intro-section';
import SideNav from './side-nav.js'

export default function Dashbaord(props) {
  return(
    <div>
			<Header />
      <SideNav />
    </div>
  )
}