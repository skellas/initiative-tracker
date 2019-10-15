import * as React from 'react';

import { Card, CardContent, TextField, Typography } from '@material-ui/core';

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
            <Card id={this.props.id}>
                <CardContent>
                    <Typography id="characterName" color="textPrimary" variant="h5" component="h2">
                        {this.props.characterName}
                    </Typography>
                    <TextField disabled id="initiativeValue" label="Initiative Value"
                        value={this.props.initiativeValue} type="number"/>
                </CardContent>
            </Card>
        );
    }
};