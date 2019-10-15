import * as React from 'react';

import { Container, Fab  } from '@material-ui/core';
import { Colorize } from '@material-ui/icons';

import { Initiative } from '../presentational/Initiative';
import { InitiativeList } from '../presentational/InitiativeList';

export interface InitiativeContainerProps {
    id: string;
    children?: any;
};

export interface InitiativeContainerState {
    order: Array<Initiative>;
}

export class InitiativeContainer extends React.Component<InitiativeContainerProps, InitiativeContainerState> {
    static defaultProps = {
        children: new Array()
    };

    
    constructor(props:InitiativeContainerProps) {
        super(props);
        const initiativeList = React.Children.only<InitiativeList>(this.props.children);
        this.state = {
            order: React.Children.toArray<Initiative>(initiativeList.props.children)
        };

        this.handleActionClick = this.handleActionClick.bind(this);
    }

    render() {
        return (
            <Container maxWidth="sm" id={this.props.id}>
                <InitiativeList id="initiativeList">
                    {this.state.order}
                </InitiativeList>
                
                <Fab color="primary" aria-label="Take Action"
                    onClick={this.handleActionClick}>
                    <Colorize />
                </Fab>
            </Container>
        );
    }
    
    handleActionClick(event:React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        this.sendToBottomOfTheOrder(this.state.order[0]);
    }

    sendToBottomOfTheOrder(init:Initiative) {
        this.setState(state => {
            const initOrder = state.order.filter((item, counter) => init !== item);
            initOrder.push(init);
            return {
                order: initOrder
            };
        });
    }

}
