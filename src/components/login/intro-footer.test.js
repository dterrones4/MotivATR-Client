import React from 'react';
import {shallow} from 'enzyme';

import { IntroFooter } from './intro-footer';

describe('<IntroFooter />', () => {
    it('Renders without crashing', () => {
        shallow(<IntroFooter />)
    });
});
