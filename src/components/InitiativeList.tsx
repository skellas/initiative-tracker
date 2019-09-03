import * as React from 'react';

export interface InitiativeListProps {
    id: string;
};

export class InitiativeList extends React.Component<InitiativeListProps, {}> {

    render() {
        return(
            <div id={this.props.id}>
                {this.props.children}
             </div>
        );
    }
};