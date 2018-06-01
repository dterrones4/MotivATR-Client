import React from 'react';
import {shallow} from 'enzyme';

import SideNav from './side-nav';

describe('<SideNav />', () => {
    it('Renders without crashing', () => {
        shallow(<SideNav />)
    });
});
