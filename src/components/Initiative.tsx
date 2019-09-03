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
                <h2 id="characterName">{this.props.characterName}</h2>
                <label htmlFor="initiativeValue">Initiative Roll:</label>
                <input id="initiativeValue" type="number" value={this.props.initiativeValue}/>
            </div>
        );
    }
};