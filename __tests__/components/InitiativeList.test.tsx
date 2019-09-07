import * as React from 'react';
import {shallow} from 'enzyme';

import {Initiative} from '../../src/components/Initiative';
import {InitiativeList} from '../../src/components/InitiativeList';

describe('Initiative List', () => {

    it('will render with provided identifier', ()=> {
        const wrapper = renderWrapper();

        expect(wrapper.getElement().props['id']).toEqual("example");
    });

    it('will render children passed in', () => {
        const wrapper = renderWrapper();

        expect(wrapper.find('#combatants').children().length).toEqual(3);
    });

    it('will move child to bottom of order', () => {
        const wrapper = renderWrapper();

        wrapper.instance().toBottomOfInitiative(wrapper.state('order')[0]);
        expect(wrapper.find('#combatants').children().last().prop('id')).toEqual("001");
    });

    it('will show top of round indicator on max initiative value', () => {
        const wrapper = renderWrapper();

        expect(wrapper.find('h2').text()).toEqual('Top of the Round');
    });

    it('will show next up indicator on lower than max initiative value', () => {
        const wrapper = renderWrapper();

        wrapper.instance().toBottomOfInitiative(wrapper.state('order')[0]);
        expect(wrapper.find('h2').text()).toEqual('Next Up');
    });

    function renderWrapper() {
        return shallow<InitiativeList>(
            <InitiativeList id="example">
                <Initiative id="001" initiativeValue={20}/>
                <Initiative id="002" initiativeValue={15}/>
                <Initiative id="003" initiativeValue={1}/>
            </InitiativeList>
        );
    }
});