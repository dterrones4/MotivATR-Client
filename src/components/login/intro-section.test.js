import React from 'react';
import {shallow} from 'enzyme';

import { IntroSection } from './intro-section';

describe('<IntroSection />', () => {
    it('Renders without crashing', () => {
        shallow(<IntroSection />)
    });
});
