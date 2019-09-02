import * as React from 'react';

export interface InitiativeProps {};

export default class Initiative extends React.Component<InitiativeProps, {}> {
    render() {
        return (
            <div>
                <h1>Initiative</h1>
                <input id="initiativeValue"/>
            </div>
        );
    }
}