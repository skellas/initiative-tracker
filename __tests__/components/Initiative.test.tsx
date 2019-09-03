import * as React from 'react';
import {shallow} from 'enzyme';

import {Initiative} from '../../src/components/Initiative';

describe('Initiative component', () => {

    it('will use default values', () => {
        const wrapper = shallow(<Initiative/>);

        console.log(wrapper.debug());
        expect(wrapper.find('#initiativeValue').first().getElement().props['value']).toEqual(-1);
        expect(wrapper.find('#characterName').first().text()).toEqual("&nbsp;");
    });

    it('accepts initiative value', () => {
        const wrapper = shallow(<Initiative initiativeValue={4}/>);

        expect(wrapper.find('#initiativeValue').first().getElement().props['value']).toEqual(4);
    });

    
    it('accepts character name value', () => {
        const wrapper = shallow(<Initiative characterName="Leeroy Jenkins"/>);

        expect(wrapper.find('#characterName').first().text()).toEqual("Leeroy Jenkins");
    });
    
});