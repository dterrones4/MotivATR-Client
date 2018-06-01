import React from 'react';
import {shallow} from 'enzyme';

import FitBitAuth	from './fitbit-auth';

describe('<FitBitAuth />', () => {
    it('Renders without crashing', () => {
        shallow(<FitBitAuth />)
    });
});
