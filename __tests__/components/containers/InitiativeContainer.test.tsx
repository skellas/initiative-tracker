import * as React from 'react';
import {shallow} from 'enzyme';

import {Initiative} from '../../../src/components/presentational/Initiative';
import {InitiativeList} from '../../../src/components/presentational/InitiativeList';
import {InitiativeContainer} from '../../../src/components/containers/InitiativeContainer';

describe('Initiative Container', () => {
    
    it('will render with provided identifier', ()=> {
        const wrapper = renderWrapper();

        expect(wrapper.getElement().props['id']).toEqual("container");
    });

    it('will move child to bottom of order', () => {
        const wrapper = renderWrapper();

        wrapper.instance().sendToBottomOfTheOrder(wrapper.state('order')[0]);
        expect(wrapper.find('#initiativeList').children().last().prop('id')).toEqual("001");
    });

    function renderWrapper() {
        return shallow<InitiativeContainer>(
            <InitiativeContainer id="container">
                <InitiativeList id="example">
                    <Initiative id="001" initiativeValue={20}/>
                    <Initiative id="002" initiativeValue={15}/>
                    <Initiative id="003" initiativeValue={1}/>
                </InitiativeList>
            </InitiativeContainer>
        );
    }
});