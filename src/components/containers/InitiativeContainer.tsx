import * as React from 'react';

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
            <div id={this.props.id}>
                <InitiativeList id="initiativeList">
                    {this.state.order}
                </InitiativeList>
                
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large black" onClick={this.handleActionClick}>
                        <i className="large material-icons">colorize</i>
                    </a>
                    <a className="btn-floating btn-large blue" onClick={this.handleActionClick}>
                        <i className="large material-icons">colorize</i>
                    </a>
                </div>
            </div>
        );
    }
    
    handleActionClick(event:React.MouseEvent<HTMLAnchorElement>) {
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
