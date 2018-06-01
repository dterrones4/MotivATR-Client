import React from 'react';
import {shallow} from 'enzyme';

import { BarGraphBtn } from './bar-graph-btn';

describe('<BarGraphBtn />', () => {
    it('Renders without crashing', () => {
        shallow(<BarGraphBtn />)
    });
});
