import * as React from 'react';
import {shallow} from 'enzyme';

import {Initiative} from '../../src/components/Initiative';
import {InitiativeList} from '../../src/components/InitiativeList';

describe('Initiative List', () => {

    it('will render with provided identifier', ()=> {
        const wrapper = shallow(<InitiativeList id="example"/>);

        expect(wrapper.getElement().props['id']).toEqual("example");
    });

    it('will render children passed in', () => {
        const wrapper = shallow(
            <InitiativeList id="example">
                <Initiative id="001"/>
                <Initiative id="001"/>
                <Initiative id="001"/>
            </InitiativeList>
        );

        expect(wrapper.children().length).toEqual(3);
    });
});