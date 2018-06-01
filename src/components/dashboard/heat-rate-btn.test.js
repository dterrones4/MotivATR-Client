import React from 'react';
import {shallow} from 'enzyme';

import { HeartRateBtn } from './heart-rate-btn';

describe('<HeartRateBtn />', () => {
    it('Renders without crashing', () => {
        shallow(<HeartRateBtn />)
    });
});
