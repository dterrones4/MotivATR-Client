import React from 'react';
import {shallow} from 'enzyme';

import { DemoBtn } from './demo-btn';

describe('<DemoBtn />', () => {
    it('Renders without crashing', () => {
        shallow(<DemoBtn />)
    });
});
