import * as React from 'react';

export interface InitiativeProps {
    id: string;
    initiativeValue: number;
    characterName: string;
};

export class Initiative extends React.Component<InitiativeProps, {}> {
    static defaultProps = {
        initiativeValue: -1,
        characterName: "&nbsp;"
    };

    render() {
        return (
            <div id={this.props.id}>
                <h1>Initiative!</h1>
                <span id="characterName">{this.props.characterName}</span>
                <input id="initiativeValue" type="number" value={this.props.initiativeValue}/>
            </div>
        );
    }
}