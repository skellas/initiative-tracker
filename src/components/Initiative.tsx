import * as React from 'react';

export interface InitiativeProps {
    value: number;
};

export class Initiative extends React.Component<InitiativeProps, {}> {
    static defaultProps = {
        value: -1
    };

    render() {
        return (
            <div>
                <h1>Initiative!</h1>
                <input id="initiativeValue" value={this.props.value}/>
            </div>
        );
    }
}