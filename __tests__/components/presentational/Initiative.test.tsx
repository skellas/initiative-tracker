import * as React from 'react';
import {shallow} from 'enzyme';

import {Initiative} from '../../../src/components/presentational/Initiative'

describe('Initiative component', () => {

    it('will use default values', () => {
        const wrapper = shallow(<Initiative id="test"/>);

        expect(wrapper.find('#initiativeValue').first().getElement().props['value']).toEqual(-1);
        expect(wrapper.find('#characterName').first().text()).toEqual("&nbsp;");
    });

    it('accepts identifier value', () => {
        const wrapper = shallow(<Initiative id="test"/>);

        expect(wrapper.getElement().props['id']).toEqual("test");
    });

    it('accepts initiative value', () => {
        const wrapper = shallow(<Initiative id="test" initiativeValue={4}/>);

        expect(wrapper.find('#initiativeValue').first().getElement().props['value']).toEqual(4);
    });
    
    it('accepts character name value', () => {
        const wrapper = shallow(<Initiative id="test" characterName="Leeroy Jenkins"/>);

        expect(wrapper.find('#characterName').first().text()).toEqual("Leeroy Jenkins");
    });
    
});