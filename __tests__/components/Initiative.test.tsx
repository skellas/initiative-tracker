import * as React from 'react';
import {shallow} from 'enzyme';

import Initiative from '../../src/components/Initiative';

describe('Initiative component', () => {

    it('renders initiative value', () => {
        const wrapper = shallow(<Initiative/>);

        expect(wrapper.find('.initiaveValue')).toBeDefined();
    })
});