import React from 'react';
import {shallow} from 'enzyme';

import { GoalsGraph } from './goals-graph';

describe('<GoalsGraph />', () => {
    it('Renders without crashing', () => {
        shallow(<GoalsGraph />)
    });
});
