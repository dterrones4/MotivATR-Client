import React from 'react';

import Header from './header';
import IntroSection from './login/intro-section';

export default function Home(props) {
  return(
    <div>
			<Header />
			<IntroSection />	
    </div>
  )
}