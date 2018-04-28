import React from 'react';

import './intro-section.css';
import IntroContent from './intro-content';

export default function IntroSection(props) {
  return(
		<div id='introSection' className='center row'>
			<IntroContent />
		</div>
	)
}