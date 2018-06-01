import React from 'react';
import {shallow} from 'enzyme';

import GoalTime  from './goal-time.js';

describe('<GoalTime />', () => {
    it('Renders without crashing', () => {
        shallow(<GoalTime />)
    });
});
