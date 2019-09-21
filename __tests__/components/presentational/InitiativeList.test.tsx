import * as React from 'react';
import {shallow} from 'enzyme';
import { InitiativeList } from '../../../src/components/presentational/InitiativeList';
import { Initiative } from '../../../src/components/presentational/Initiative';


describe('Initiative List', () => {

    it('will render with provided identifier', ()=> {
        const wrapper = renderWrapper();

        expect(wrapper.getElement().props['id']).toEqual("example");
    });

    it('will render children passed in', () => {
        const wrapper = renderWrapper();

        expect(wrapper.find('#example').children().length).toEqual(3);
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