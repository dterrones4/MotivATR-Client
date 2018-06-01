import React from 'react';
import {shallow} from 'enzyme';

import { IntroContent } from './intro-content';

describe('<IntroContent />', () => {
    it('Renders without crashing', () => {
        shallow(<IntroContent />)
    });
});
