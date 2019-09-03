import * as React from 'react';

import { Initiative } from './Initiative';

export interface InitiativeListProps {
    id: string;
    children?: any;
};

export interface InitiativeListState {
    order: Array<Initiative>;
}

export class InitiativeList extends React.Component<InitiativeListProps, InitiativeListState> {
    static defaultProps = {
        children: new Array()
    };

    constructor(props:InitiativeListProps) {
        super(props);
        this.state = {
            order: this.props.children
        };
    }

    render() {
        return(
            <div id={this.props.id}>
                {this.state.order}
             </div>
        );
    }

    toBottomOfInitiative(init:Initiative) {
        this.setState(state => {
            const initOrder = state.order.filter((item, counter) => init !== item);
            initOrder.push(init);
            return {
                order: initOrder
            };
        });
    }
};