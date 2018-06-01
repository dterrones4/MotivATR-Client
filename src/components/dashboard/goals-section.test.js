import React from 'react';
import {shallow} from 'enzyme';

import { GoalsSection } from './goals-section';

describe('<GoalsSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GoalsSection />)
    });
});
