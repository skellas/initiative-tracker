import * as React from 'react';
import {shallow} from 'enzyme';

import {Initiative} from '../../src/components/Initiative';

describe('Initiative component', () => {

    it('accepts initiative value', () => {
        const wrapper = shallow(<Initiative value={4}/>);

        expect(wrapper.find('#initiativeValue').get(0).props.value).toEqual(4);
    })
});