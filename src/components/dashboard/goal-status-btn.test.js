import React from 'react';
import {shallow} from 'enzyme';

import { GoalStatusBtn } from './goal-status-btn';

describe('<GoalsStatusBtn />', () => {
    it('Renders without crashing', () => {
        shallow(<GoalStatusBtn />);
    });
});
