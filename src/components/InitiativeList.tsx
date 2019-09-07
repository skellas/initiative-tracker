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
        const initiatives = React.Children.toArray<Initiative>(this.props.children);
        this.state = {
            order: initiatives
        };
    }

    render() {
        let heading;
        if (this.state.order.length &&
            this.state.order[0].props.initiativeValue == this.findHighestInitiativeValue()) {
            heading = <h2>Top of the Round</h2>
        } else {
            heading = <h2>Next Up</h2>
        }
        return(
            <div id={this.props.id}>
                {heading}
                <div id="combatants">
                    {this.state.order}
                </div>
             </div>
        );
    }

    findHighestInitiativeValue():number {
        return Math.max.apply(Math, this.state.order.map((i) => {return i.props.initiativeValue}));
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