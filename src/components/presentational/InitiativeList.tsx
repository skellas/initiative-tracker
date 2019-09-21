import * as React from 'react';

export interface InitiativeListProps {
    id: string;
    children?: any;
};


export class InitiativeList extends React.Component<InitiativeListProps, {}> {
    static defaultProps = {
        children: new Array()
    };

    constructor(props:InitiativeListProps) {
        super(props);
    }

    render() {
        return(
            <div id={this.props.id}>
                {this.props.children}
            </div>
        );
    }

};